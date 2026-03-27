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

// 🔥 mantener modo oscuro o claro dependiendo cual esté activo al recargar
window.onload = function(){
    let btn = document.getElementById("darkBtn");

    if(localStorage.getItem("darkMode") === "true"){
        document.body.classList.add("dark-mode");
        if(btn) btn.textContent = "☀️";
    } else {
        if(btn) btn.textContent = "🌙";
    }
}

// 1. Declarar las referencias a los elementos del DOM
const chatInput = document.getElementById("chatInput");
const chatSendBtn = document.getElementById("chatSendBtn");
const chatBody = document.getElementById("chatBody");

// 2. Función para enviar mensaje
function enviarMensaje() {
    const texto = chatInput.value.trim();
    if(texto === "") return;

    // --- MENSAJE DEL USUARIO ---
    const userDiv = document.createElement("div");
    userDiv.className = "msg user"; 
    userDiv.textContent = texto; 
    chatBody.appendChild(userDiv);

    chatInput.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;

    // --- SIMULACIÓN DE RESPUESTA BOT ---
    setTimeout(() => {
        const botDiv = document.createElement("div");
        botDiv.className = "msg bot"; 
        botDiv.textContent = "¡Mensaje recibido! Nuestro equipo de arquitectos UserVix revisará tu diseño pronto.";
        chatBody.appendChild(botDiv);
        
        chatBody.scrollTo({
            top: chatBody.scrollHeight,
            behavior: 'smooth'
        });
    }, 1000);
}

// 3. VINCULAR EVENTOS (Esto es lo que faltaba)
// Al hacer clic en el botón
chatSendBtn.addEventListener("click", enviarMensaje);

// Al presionar la tecla Enter en el teclado
chatInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        enviarMensaje();
    }
});