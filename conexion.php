<?php

$serverName = "127.0.0.1,1433";
$database = "USERVIXDB";
$username = "userphp";
$password = "123456";

try {
    $conn = new PDO("sqlsrv:server=$serverName;Database=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Conexión exitosa";

} catch(PDOException $e) {

    die("Conexión fallida: " . $e->getMessage());

}

?>