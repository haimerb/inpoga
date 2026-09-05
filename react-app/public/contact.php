<?php
/**
 * Integración Popular Gaviotas Corporación
 * Endpoint de contacto — /contact.php
 *
 * Recibe el formulario desde el frontend (fetch), valida y envía por correo
 * a la bandeja institucional usando mail().
 */

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Método no permitido.']);
    exit;
}

// Limitar el tamaño del cuerpo para evitar abusos.
$body = file_get_contents('php://input');
if ($body === false || strlen($body) > 20000) {
    http_response_code(413);
    echo json_encode(['ok' => false, 'message' => 'Solicitud demasiado grande.']);
    exit;
}

$data = json_decode($body, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    $data = $_POST;
}
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'message' => 'Solicitud inválida.']);
    exit;
}

// Honeypot anti-spam: si el campo oculto viene lleno, ignorar en silencio.
if (!empty($data['_gotcha'])) {
    echo json_encode(['ok' => true, 'message' => 'OK']);
    exit;
}

function clean($value) {
    return trim(strip_tags((string) $value));
}

$nombre    = clean($data['nombre'] ?? '');
$email     = clean($data['email'] ?? '');
$telefono  = clean($data['telefono'] ?? '');
$asunto    = clean($data['asunto'] ?? '');
$mensaje   = clean($data['mensaje'] ?? '');

$errors = [];

if (mb_strlen($nombre) < 2) $errors['nombre'] = 'Este campo es obligatorio.';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors['email'] = 'Ingresá un correo electrónico válido.';
if ($telefono !== '' && !preg_match('/^[\+]?[0-9\s\-\(\)]{7,15}$/', $telefono)) {
    $errors['telefono'] = 'Ingresá un teléfono válido.';
}
if ($asunto === '') $errors['asunto'] = 'Este campo es obligatorio.';
if (mb_strlen($mensaje) < 10) $errors['mensaje'] = 'Ingresá al menos 10 caracteres.';

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'errors' => $errors]);
    exit;
}

$destinatario = 'contacto@corpogaviotas.org';

$asuntoOpciones = [
    'Oficio'     => 'Quiero participar con mi oficio',
    'Voluntaria' => 'Quiero ser voluntaria',
    'Aliada'     => 'Soy una organización aliada',
    'Otro'       => 'Otro',
];
$asuntoLargo = isset($asuntoOpciones[$asunto]) ? $asuntoOpciones[$asunto] : $asunto;

$cuerpo  = "Nuevo mensaje desde el sitio web:\r\n\r\n";
$cuerpo .= "Nombre: " . $nombre . "\r\n";
$cuerpo .= "Correo: " . $email . "\r\n";
if ($telefono !== '') $cuerpo .= "Teléfono: " . $telefono . "\r\n";
$cuerpo .= "Asunto: " . $asuntoLargo . "\r\n";
$cuerpo .= "Mensaje:\r\n" . $mensaje . "\r\n";
$cuerpo .= "\r\n---\r\n";
$cuerpo .= "Enviado el " . date('d/m/Y H:i') . " desde corpogaviotas.org\r\n";

$cabeceras = 'From: contacto@corpogaviotas.org' . "\r\n";
$cabeceras .= 'Reply-To: ' . $email . "\r\n";
$cabeceras .= 'Content-Type: text/plain; charset=utf-8' . "\r\n";
$cabeceras .= 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'X-Mailer: PHP/' . phpversion() . "\r\n";

$subject = '[Corpogaviotas] Nuevo mensaje de ' . $nombre;
$subject = mb_substr($subject, 0, 78);

$enviado = @mail($destinatario, $subject, $cuerpo, $cabeceras, '-f ' . $destinatario);

if ($enviado) {
    echo json_encode(['ok' => true, 'message' => 'Mensaje enviado.']);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'No se pudo enviar el mensaje. Intentá de nuevo.']);
}