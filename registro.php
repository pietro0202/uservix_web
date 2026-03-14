<?php
include 'conexion.php';

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $password = password_hash($_POST['contrasena'], PASSWORD_DEFAULT);

    $stmt = $conn->prepare("INSERT INTO Usuarios (nombre_completo, email, contrasena) VALUES (:nombre, :email, :password)");
    $stmt->bindParam(':nombre', $nombre);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':password', $password);

    if($stmt->execute()){
        echo "Usuario registrado con éxito";
        header("Location: login.html");
        exit;
    } else {
        echo "Error al registrar usuario";
    }
}
?>