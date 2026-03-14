<?php
// Datos de conexión a SQL Server
$serverName = "TU_SERVIDOR"; // ej: localhost\SQLEXPRESS
$database = "USERVIXDB";
$username = "TU_USUARIO";
$password = "TU_CONTRASEÑA";

try {
    $conn = new PDO("sqlsrv:server=$serverName;Database=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // echo "Conexión exitosa"; // para pruebas
} catch(PDOException $e) {
    die("Conexión fallida: " . $e->getMessage());
}
?>