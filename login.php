<?php
session_start();
include 'conexion.php';

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $email = $_POST['email'];
    $password = $_POST['contrasena'];

    // Consulta segura
    $stmt = $conn->prepare("SELECT * FROM Usuarios WHERE email = :email");
    $stmt->bindParam(':email', $email);
    $stmt->execute();

    $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

    if($usuario){
        // Si las contraseñas están hasheadas
        if(password_verify($password, $usuario['contrasena'])){
            // Iniciar sesión
            $_SESSION['id_usuario'] = $usuario['id_usuario'];
            header("Location: dashboard.php");
            exit;
        } else {
            echo "Contraseña incorrecta";
        }
    } else {
        echo "Usuario no encontrado";
    }
}
?>