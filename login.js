document.addEventListener('DOMContentLoaded', function() {
    const registerPage = document.getElementById('registration-page');
      const loginPage = document.querySelector('.login-page');
     const loginError = document.getElementById('login-error-message');
      const registerError = document.getElementById('register-error-message');
  
      window.register = (event) => {
         event.preventDefault();
        loginPage.style.display = 'none';
       registerPage.style.display = 'block';
      }
  
      window.checkLogin = () => {
       const username = document.getElementById('login-username').value;
       const password = document.getElementById('login-password').value;
  
         if(username === 'test' && password === '12345'){
            window.location.href = "index.html"
            loginError.style.display = 'none';
         }else{
            loginError.textContent = 'Неверный логин или пароль';
            loginError.style.display = 'block';
         }
    }
  
    window.submitRegistration = (event) => {
        event.preventDefault();
        const username = document.getElementById('register-username').value;
          const email = document.getElementById('register-email').value;
          const password = document.getElementById('register-password').value;
          const confirmPassword = document.getElementById('register-confirm-password').value;
  
           if(username == '' || email == '' || password == '' || confirmPassword == ''){
              registerError.style.display = 'block';
              registerError.textContent = 'Все поля должны быть заполнены';
           }else if(password != confirmPassword){
             registerError.style.display = 'block';
              registerError.textContent = 'Пароли не совпадают';
         }else {
             alert('Вы успешно зарегистрированы!');
             loginPage.style.display = 'block';
            registerPage.style.display = 'none';
             registerError.style.display = 'none';
         }
    }
  });