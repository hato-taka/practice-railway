let socket;

window.addEventListener("load", () => {
    const protocol = location.protocol === 'https:' ? 'wss' : 'ws';
    socket = new WebSocket(`${protocol}://${location.host}/ws`);

    socket.onmessage = function(event) {
        const messages = document.getElementById("messages");
        const li = document.createElement("li");
        li.textContent = event.data;
        messages.appendChild(li);
    };
});

function sendMessage() {
    if (!socket || socket.readyState !== WebSocket.OPEN) {
        alert("WebSocket接続が確立されていません");
        return;
    }

    const input = document.getElementById("messageInput");
    socket.send(input.value);
    input.value = "";
}