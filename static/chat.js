const socket = new WebSocket(`ws://${location.host}/ws`);

socket.onmessage = function(event) {
    const messages = document.getElementById("messages");
    const li = document.createElement("li");
    li.textContent = event.data;
    messages.appendChild(li);
};

function sendMessage() {
    const input = document.getElementById("messageInput");
    socket.send(input.value);
    input.value = "";
}