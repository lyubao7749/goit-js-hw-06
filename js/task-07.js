const controlFont = document.getElementById("font-size-control");

const textEl = document.getElementById("text");

controlFont.oninput = function() {
    textEl.style.fontSize = controlFont.value + "px";
};