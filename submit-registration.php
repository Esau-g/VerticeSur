<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $formData = $_POST;
    
    // Send email to organizer
    $to = 'race-organizer@email.com';
    $subject = 'Nueva Inscripción - Vértice Sur 70K';
    
    $message = "
    Nueva Inscripción a la Carrera Vértice Sur
    
    Información Personal:
    - Nombre: {$formData['firstName']} {$formData['lastName']}
    - Email: {$formData['email']}
    - Teléfono: {$formData['phone']}
    - Fecha de Nacimiento: {$formData['birthDate']}
    - Género: {$formData['gender']}
    
    Información de la Carrera:
    - Categoría: {$formData['raceCategory']}
    - Talla de Camiseta: {$formData['shirtSize']}
    
    Contacto de Emergencia:
    - Nombre: {$formData['emergencyName']}
    - Teléfono: {$formData['emergencyPhone']}
    - Relación: {$formData['emergencyRelationship']}
    
    Información Médica:
    - Condiciones: " . ($formData['medicalConditions'] ? $formData['medicalConditions'] : 'Ninguna') . "
    
    Fecha de Inscripción: " . date('Y-m-d H:i:s');
    
    $headers = 'From: noreply@yourwebsite.com';
    
    if(mail($to, $subject, $message, $headers)) {
        echo json_encode(['success' => true, 'message' => 'Registration sent successfully']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error sending email']);
    }
} 

else {
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}
?>