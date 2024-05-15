

// Elementos del DOM
const chatbox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

// Función para mostrar el chat

function toggleChat() {
    var chatContainer = document.querySelector('.chat-container');
    chatContainer.style.display = (chatContainer.style.display === 'block') ? 'none' : 'block';
}

function toggleMenu() {
    var menu = document.getElementById("menu");
    var buttons = menu.getElementsByTagName("button");
    if (menu.style.display === "none") {
        menu.style.display = "block";
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.display = "block";
        }
    } else {
        menu.style.display = "none";
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.display = "none";
        }
    }
}

// Función para mostrar u ocultar los ingredientes
function toggleIngredients(id) {
    const ingredients = document.getElementById(id);
    ingredients.style.display = ingredients.style.display === 'block' ? 'none' : 'block';

}

// Función para enviar mensajes
function sendMessage() {
    const message = userInput.value;
    if (message.trim() === "") return;
    displayMessage("Tú: " + message);
    respondToMessage(message);
    userInput.value = "";
}

// Función para mostrar mensajes en el chat
function displayMessage(message) {
    const chatMessage = document.createElement("div");
    chatMessage.innerHTML = message; // Utilizamos innerHTML para interpretar las etiquetas HTML
    chatbox.appendChild(chatMessage);
}

// Función para responder a los mensajes del usuario
function respondToMessage(message) {
    let response;
    if (message.toLowerCase().includes("")) {
        response = "Hola, espero que estes bien, te doy la bienvenida a nuestra Lechoneria De La Abuela. Es un placer tenerte con nosotros, por eso te doy las siguientes opciones para que pases un rato agradable y disfrutes de nuestras especialidades.";
        response += "<button onclick='redirectToPage(\"quintomenu.html\")' style=background-color: green>Ver menú</button>";
    }  
    else {
        response = "Lo siento, no entendí tu mensaje.";
    }
    displayMessage("La lechona de la abuela: " + response);
}


// Función para redirigir a otra página
function redirectToPage(page) {
    window.location.href = page;
}