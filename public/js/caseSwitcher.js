const quietBtn = document.getElementById("quiet-btn");
const loudBtn = document.getElementById("loud-btn");
const sarcBtn = document.getElementById("sarc-btn");
const content = document.getElementById("patrick");
const text = content.innerText;

quietBtn.addEventListener('click', quietText);
loudBtn.addEventListener('click', loudText);
sarcBtn.addEventListener('click', sarcText);

function quietText() {
    console.log("Quiet");
    content.innerText = text.toLowerCase();
}

function loudText() {
    console.log("Loud");
    content.innerText = text.toUpperCase();
}

function sarcText() {
    console.log("Sarcastic");
    let newStr = "";
    let upper = false;
    for (i=0;i<text.length;i++) {
        let char;
        if ("abcdefghijklmnopqrstuvwxyz".includes(text[i].toLowerCase())) {
            if (upper) {
                char = text[i].toUpperCase();
                upper = false;
            }
            else {
                char = text[i].toLowerCase();
                upper = true;
            }
        }
        else {
            char = text[i]
        }
        newStr += char;
    }
    content.innerText = newStr;
}