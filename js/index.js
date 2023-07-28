window.onload = function(){
    const mensajesChat = document.getElementById("area-Mensaje");
    const mensajeInput = document.getElementById("texto");
    const botonEnviar = document.getElementById("boton-enviar");

    function mostrarMensajesChat(mensaje, remitente, esUsuario){
        const nuevoMensaje = document.createElement('div');
        nuevoMensaje.classList.add('area-Mensaje');
        if(esUsuario){
            nuevoMensaje.classList.add('Usuario');
        }
        else{
            nuevoMensaje.classList.add('Random');
        }
        nuevoMensaje.textContent = `${remitente}: ${mensaje}`;
        mensajesChat.appendChild(nuevoMensaje);
    }
    //funcion donde se hacen las respuestas de manera aleatoria
    function generadorRandomRespuesta(){
        const respuestas = [
            "Hola","¿Cómo puedo ayudarte?","Dime más",
            "Eso suena bastante bien", "Dejame pensar acerca de ello",
            "Lo siento no entiendo, ¿podrías volver a escribirlo?",
            "Esa es una buena pregunta","Esa es una interesante pregunta"
        ];
        const randomIndice = Math.floor(Math.random() * respuestas.length);
        return respuestas[randomIndice];
    }

    //funcion para enviar mensajes en el chat
    function enviarMensaje(){
        const mensaje = mensajeInput.value;

        if(mensaje.trim() !== ''){
            mostrarMensajesChat(mensaje, 'Tú');
            mensajeInput.value='';
        }
        setTimeout(function(){
            const botResponde = generadorRandomRespuesta();
            mostrarMensajesChat(botResponde, 'Chatbot');
        },1000);
    }
    botonEnviar.addEventListener('click',enviarMensaje);
}
