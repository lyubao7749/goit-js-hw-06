const refs = {
	createBoxes: document.querySelector('[data-create]'),
	destroyBoxes: document.querySelector('[data-destroy]'),
	numberBoxes: document.querySelector('input[type="number"]'),
	parentBox: document.querySelector('#boxes'),	
}

let boxSize = 30;
let countBox = 0;

function onInputGetQuantaty(event) {
	countBox = event.currentTarget.value;
	console.log("countBox => " + countBox);
}

refs.numberBoxes.addEventListener("input", onInputGetQuantaty);

function getRandomHexColor ()  {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

function validateRange (quantaty)  {
	const min = Number(refs.numberBoxes.min);
	const max = Number(refs.numberBoxes.max);

	return quantaty < min || quantaty > max;
}

function onCreateBoxesClick() {
	if (validateRange(countBox)) {
		alert('Пожалуйста, введите число от 1 до 100');
		refs.numberBoxes.value = '';
		return;
	}
	createBoxes(countBox);
	refs.numberBoxes.value = '';
	countBox = 0;
}

function createBoxes (amount)  {
  for (let i = 0; i < amount; i++) {
    boxSize += 10;
    const newBox = document.createElement("div");
    newBox.style.background = getRandomHexColor();
    newBox.style.height = boxSize + "px";
    newBox.style.width = boxSize + "px";
    newBox.style.margin = "10px";
    newBox.classList.add("new-box");
    refs.parentBox.append(newBox);
  }
}

refs.createBoxes.addEventListener("click", onCreateBoxesClick);

function onDestroyBoxesClick() {
	destroyBoxes () ;
	refs.numberBoxes.value = '';
	countBox = 0;
	boxSize = 30;
}

function destroyBoxes () {
  const allNewBoxes = document.querySelectorAll(".new-box");
  for (let allNewBoxe of allNewBoxes) {
    refs.parentBox.removeChild(allNewBoxe);
  }
};

refs.destroyBoxes.addEventListener("click", onDestroyBoxesClick);
 