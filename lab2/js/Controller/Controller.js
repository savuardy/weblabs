class Controller {
  constructor() {
    this.view = new View();
    this.model = new Model();
  }
  
  profileRegisterHandler = () => {
    const RegisterBtn = document.querySelector('.register__btn');
    RegisterBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('here');
      this.model.registrProfile();
    });
  };

  profileLoginHandler = () => {
    const LoginBtn = document.getElementById('loginBtn');
    LoginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.model.loginProfile();
    });
  };

  profileLogoutHandler = () => {
    const logoutLink = document.getElementById("full-logout");
    logoutLink.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('here');
      this.model.logoutProfile();
      document.location.href = "./sign-up.html";
    })
  };
}

const myApp = new Controller();
