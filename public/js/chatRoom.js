const sendBtn = document.getElementById("send-btn");
const textInput = document.getElementById("text-input");
const chat = document.getElementById("chat");

sendBtn.addEventListener('click', sendMsg);

function sendMsg() {
    console.log("Help");
    let msg = textInput.value;
    textInput.value = "";
    chat.innerHTML  += `<p>${msg}</p>`;
}