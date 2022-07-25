const quietBtn = document.getElementById("quiet-btn");
const loudBtn = document.getElementById("loud-btn");
const sarcBtn = document.getElementById("sarc-btn");
const content = document.getElementById("patrick");

quietBtn.addEventListener('click', quietText);
loudBtn.addEventListener('click', loudText);
sarcBtn.addEventListener('click', sarcText);

function quietText() {
    console.log("Quiet");
    content.innerText = content.innerText.toLowerCase();
}

function loudText() {
    console.log("Loud");
    content.innerText = content.innerText.toUpperCase();
}

function sarcText() {
    console.log("Sarcastic");
    let origStr = content.innerText;
    let newStr = "";
    let upper = false;
    for (i=0;i<origStr.length;i++) {
        let char;
        if ("abcdefghijklmnopqrstuvwxyz".includes(origStr[i])) {
            if (upper === false) {
                char = origStr[i].toLowerCase();
                upper = true;
            }
            else {
                char = origStr[i].toUpperCase();
                upper = false;
            }
        }
        else {
            char = origStr[i]
        }
        newStr += char;
    }
    content.innerText = newStr;
}