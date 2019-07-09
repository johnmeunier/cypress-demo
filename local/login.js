document.querySelector('.login__button').addEventListener('click', () => {
    if(document.querySelector('.login__email').value === "john@axa.fr" && document.querySelector('.login__password').value === "password"){
        localStorage.setItem('logged', true);
        document.location.href = "http://localhost:8000/app.html";
    } else {
        localStorage.setItem('logged', false);
        document.location.href = "http://localhost:8000/error.html";
    }
});