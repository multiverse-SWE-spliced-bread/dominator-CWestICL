for (i=0;i<99;i++) {
    document.getElementById("blocks").innerHTML += `<div id="block-${i + 2}" class="red-block"></div>`;
}

const blocks = document.querySelectorAll(".red-block");

blocks.forEach(block => {
    block.addEventListener('mouseover', function deleteBlock() {
        block.remove();
    });
});