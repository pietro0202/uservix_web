const forms = document.querySelectorAll("form")

forms.forEach(form =>{

form.addEventListener("submit",(e)=>{

e.preventDefault()

alert("Formulario enviado")

})

})

/* BOTON MODO OSCURO */

const boton = document.getElementById("modoBtn")
const logo = document.getElementById("logoImg")

/* CARGAR MODO GUARDADO */

if(localStorage.getItem("modo") === "oscuro"){

document.body.classList.add("dark-mode")

if(logo){
logo.src = "images/logouservixblanco.png"
}

}else{

if(logo){
logo.src = "images/logouservixnegro.png"
}

}

/* CAMBIAR MODO */

if(boton){

boton.addEventListener("click", () =>{

document.body.classList.toggle("dark-mode")

if(document.body.classList.contains("dark-mode")){

localStorage.setItem("modo","oscuro")

if(logo){
logo.src = "images/logouservixblanco.png"
}

}else{

localStorage.setItem("modo","claro")

if(logo){
logo.src = "images/logouservixnegro.png"
}

}

})

}