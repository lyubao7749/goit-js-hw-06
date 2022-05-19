const refs = {
	createBoxes: document.querySelector('[data-create]'),
	destroyBoxes: document.querySelector('[data-destroy]'),
	numberBoxes: document.querySelector('input[type="number"]'),
	parentBox: document.querySelector('#boxes'),
};

let amount = 0;

refs.numberBoxes.addEventListener('input', onInputGetQuantaty);
refs.createBoxes.addEventListener('click', onCreateBoxesClick);
refs.destroyBoxes.addEventListener('click', onDestroyBoxesClick);

function onInputGetQuantaty(event) {
	amount = event.currentTarget.value;
}

function onCreateBoxesClick() {
	if (!validateRange(amount)) {
		destroyBoxes();
	}
	createBoxes(amount);
  refs.numberBoxes.value = '';
	amount = 0;
}

function onDestroyBoxesClick() {
	destroyBoxes();
  refs.numberBoxes.value = '';
	amount = 0;
}

function createBoxes(amount) {
	const markup = [];
	let boxSize = 30;

	if (validateRange(amount)) {
		alert('Пожалуйста, введите число от 1 до 100');
		refs.numberBoxes.value = '';
		return;
	}

	for (let i = 0; i < amount; i += 1) {
		markup.push(
			`<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>`
		);
		boxSize += 10;
	}

	refs.parentBox.insertAdjacentHTML('afterbegin', markup.join``);
}

function validateRange(quantaty) {
	const min = Number(refs.numberBoxes.min);
	const max = Number(refs.numberBoxes.max);

	return quantaty < min || quantaty > max;
}

function destroyBoxes() {
	refs.parentBox.innerHTML = '';
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

