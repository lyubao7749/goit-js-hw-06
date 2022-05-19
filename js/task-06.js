const input = document.getElementById("validation-input");
const totalLenght = input.getAttribute("data-length");
const intTotallenght = parseInt(totalLenght, 10);

function onInputBlur() {
    if (input.value.length === intTotallenght) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
  }
  
 input.addEventListener('blur', onInputBlur);