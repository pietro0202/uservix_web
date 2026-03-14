<?php
session_start();
include 'conexion.php';

// Redirigir si no ha iniciado sesión
if(!isset($_SESSION['id_usuario'])){
    header("Location: login.html");
    exit;
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Dashboard - USERVIX</title>
<link rel="stylesheet" href="css/style.css">
</head>
<body>

<header class="header">
<h1>USERVIX</h1>
<nav class="menu">
<a href="dashboard.php">Dashboard</a>
<a href="#">Mis Configuraciones</a>
<a href="#">Temas</a>
<a href="#">Dispositivos</a>
<a href="index.html">Cerrar sesión</a>
</nav>
</header>

<section class="dashboard">
<h2>Bienvenido Usuario</h2>
<p>Administra tu personalización y controla las funciones de USERVIX.</p>

<div class="cards">
<!-- Tus cards aquí -->
<div class="card">
<h3>Temas</h3>
<p>Explora temas visuales para tu dispositivo.</p>
<button class="dash-btn">Explorar</button>
</div>

<div class="card">
<h3>Optimización</h3>
<p>Mejora el rendimiento del sistema.</p>
<button class="dash-btn">Optimizar</button>
</div>

<div class="card">
<h3>Configuraciones</h3>
<p>Administra la personalización de tu sistema.</p>
<button class="dash-btn">Administrar</button>
</div>

<div class="card">
<h3>Dispositivos</h3>
<p>Gestiona los dispositivos conectados.</p>
<button class="dash-btn">Ver dispositivos</button>
</div>

<div class="card">
<h3>Seguridad</h3>
<p>Controla accesos y protege tu cuenta.</p>
<button class="dash-btn">Administrar</button>
</div>

<div class="card">
<h3>Descargas</h3>
<p>Revisa los temas descargados.</p>
<button class="dash-btn">Ver descargas</button>
</div>
</div>
</section>

</body>
</html>