function enviarMensaje() {
    const texto = chatInput.value.trim();
    if(texto === "") return;

    // --- MENSAJE DEL USUARIO ---
    const userDiv = document.createElement("div");
    // Usamos 'msg user' para heredar los estilos base y el color azul
    userDiv.className = "msg user"; 
    userDiv.textContent = texto; 
    chatBody.appendChild(userDiv);

    chatInput.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;

    // --- SIMULACIÓN DE RESPUESTA BOT ---
    setTimeout(() => {
        const botDiv = document.createElement("div");
        // Usamos 'msg bot' para que sea idéntico al mensaje de bienvenida
        botDiv.className = "msg bot"; 
        botDiv.textContent = "¡Mensaje recibido! Nuestro equipo de arquitectos UserVix revisará tu diseño pronto.";
        chatBody.appendChild(botDiv);
        
        // Auto-scroll al final
        chatBody.scrollTo({
            top: chatBody.scrollHeight,
            behavior: 'smooth'
        });
    }, 1000);
}