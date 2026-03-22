// ==========================
// 🔐 REGISTRO / LOGIN / LOGOUT
// ==========================
function registrar() {
    let pass = document.getElementById("passReg").value;
    let confirm = document.getElementById("confirmPass").value;

    if(pass !== confirm){
        alert("Las contraseñas no coinciden");
        return;
    }

    let email = document.getElementById("emailReg").value;

    localStorage.setItem("user", email);
    localStorage.setItem("pass", pass);

    alert("Usuario registrado");
    window.location.href = "login.html";
}

function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let remember = document.getElementById("remember").checked;

    let savedUser = localStorage.getItem("user");
    let savedPass = localStorage.getItem("pass");

    if(email === savedUser && pass === savedPass){

        if(remember){
            localStorage.setItem("session", "active");
        }

        window.location.href = "dashboard.html";
    } else {
        alert("Datos incorrectos");
    }
}

function logout() {
    window.location.href = "index.html";
}

// ==========================
// 🌙 MODO OSCURO
// ==========================
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    let btn = document.getElementById("darkBtn");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("darkMode", "true");
        btn.textContent = "☀️";
    } else {
        localStorage.setItem("darkMode", "false");
        btn.textContent = "🌙";
    }
}

// 🔥 mantener modo y botón al recargar
window.onload = function(){
    let btn = document.getElementById("darkBtn");

    if(localStorage.getItem("darkMode") === "true"){
        document.body.classList.add("dark-mode");
        if(btn) btn.textContent = "☀️";
    } else {
        if(btn) btn.textContent = "🌙";
    }
}

// ==========================
// ♿ ACCESIBILIDAD
// ==========================
function toggleAccesibilidad() {
    document.body.classList.toggle("accesibilidad");
}

// ==========================
// 💬 CHAT
// ==========================
const chatBody = document.querySelector(".chat-body") || document.getElementById("chatBody");
const chatInput = document.querySelector(".chat-input-area input") || document.getElementById("chatInput");
const chatButton = document.querySelector(".chat-input-area button") || document.getElementById("chatSendBtn");

if(chatButton && chatInput && chatBody){
    chatButton.addEventListener("click", enviarMensaje);
    chatInput.addEventListener("keypress", function(e){
        if(e.key === "Enter") enviarMensaje();
    });
}

function enviarMensaje() {
    const texto = chatInput.value.trim();
    if(texto === "") return;

    // Mensaje del usuario
    const userDiv = document.createElement("div");
    userDiv.className = "user-msg"; 
    userDiv.textContent = texto; // Usamos textContent por seguridad y limpieza
    chatBody.appendChild(userDiv);

    chatInput.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;

    // Simulación de respuesta bot
    setTimeout(() => {
        const botDiv = document.createElement("div");
        botDiv.className = "bot-msg"; 
        botDiv.textContent = "¡Mensaje recibido! Nuestro equipo revisará tu solicitud.";
        chatBody.appendChild(botDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
}

