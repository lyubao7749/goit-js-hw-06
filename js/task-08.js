const loginFormRef = document.querySelector('.login-form');
let formObject = [];

const onFormSubmit = (event) => {
    let isValid = true;
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => {
        formObject[name] =  value; 
        if(!value) {
          isValid = false;
        }
    });
    
    if (isValid) {
        event.preventDefault();
        console.log(formObject);
        loginFormRef.reset();
    } else {
        alert('Пожалуйста, заполните ВСЕ поля');
    };

 };

loginFormRef.addEventListener('submit', onFormSubmit);
