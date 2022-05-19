 const incrementButton = document.querySelector("[data-action='increment']");
 const decrementButton = document.querySelector("[data-action='decrement']");
 const dataValue = document.querySelector('#value');
  
  
let counterValue = 0;

const increment = () => {
  counterValue += 1;
  console.log(counterValue);
  dataValue.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  dataValue.textContent = counterValue;
};

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);