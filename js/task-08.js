const loginFormRef = document.querySelector('.login-form');

const onFormSubmit = (event) => {
     event.preventDefault();
     const formData = event.currentTarget.elements;
     const email = formData.email.value;
     const password = formData.password.value;
     
     if (email.length == 0 || password.length  == 0) {
        alert('Пожалуйста, заполните ВСЕ поля'); 
       }
     else {
        console.log({email, password});
        event.currentTarget.reset();
     }

 };

 loginFormRef.addEventListener('submit', onFormSubmit);