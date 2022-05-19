const refs = {
	changeColorBtnRef: document.querySelector('.change-color'),
	body: document.querySelector('body'),
	hexColor: document.querySelector('.color'),
};

function onBtnClickChangeColor() {
	const generatedColor = getRandomHexColor();

	refs.body.style.backgroundColor = generatedColor;
	refs.hexColor.textContent = generatedColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

refs.changeColorBtnRef.addEventListener('click', onBtnClickChangeColor);