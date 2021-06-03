
function checkName(name) {
  if (name.length < 4) {
    alert("Too short name");
    return false;
  }
  return true;
}
function checkPassword(password) {
  if (password.length < 6) {
    alert("Too short password");
    return false;
  }
  return true;
}

class Model {
  constructor() {
    this.currentUserIndex = localStorage.getItem("currentUserIndex");
    this.allUsers = JSON.parse(localStorage.getItem("allUsers"));
  }

  loginProfile = () => {
    let currentAcc = -1;
    let currentAccIndex = -1;
    const contactsLoginEmail = document.getElementById("loginEmail");
    const contactsLoginPassword = document.getElementById("loginPassword");

   
      currentAcc = this.allUsers.find(
      (acc) => acc.email === contactsLoginEmail.value
      );
      if (typeof currentAcc === "undefined") {
        alert("Acc with this email dosen't exist ");
        return;
      } else {
        currentAccIndex = this.allUsers.findIndex(
          (acc) => acc.email === contactsLoginEmail.value
        );
        if (currentAcc.password === contactsLoginPassword.value) {
          localStorage.setItem("currentUserIndex", currentAccIndex);
          document.location.href = "./profile.html";
        } else {
          alert("Wrong password");
          contactsLoginPassword.value = "";
          return;
        }
      }
  };

  logoutProfile = () => {
    
    localStorage.setItem("currentUserIndex", -1);
      // logoutLink.innerHTML = "LOGOUT";
  };

  registrProfile = () => {
    const contactsRegisterEmail = document.getElementById("registerEmail");
    const contactsRegisterName = document.getElementById("registerName");
    const contactsRegisterPassword = document.getElementById(
      "registerPassword"
    );
    const contactsRegisterBirthday = document.getElementById(
      "registerBirthday"
    );
    const contactsRegisterMale = document.querySelector(".gender-male-check");
    const contactsRegisterFemale = document.querySelector(
      ".gender-female-check"
    );
    let gender = -1;
    const newProfile = {};
    
      if (checkPassword(contactsRegisterPassword.value)) {
        if (contactsRegisterBirthday.value === "") {
          alert("Select your birthday");
          return;
        }
        if (contactsRegisterMale.checked) {
          gender = "Male";
        } else if (contactsRegisterFemale.checked) {
          gender = "Female";
        } else {
          alert("Select yours gender");
          return;
        }
        newProfile.email = contactsRegisterEmail.value;
        newProfile.name = contactsRegisterName.value;;
        newProfile.password = contactsRegisterPassword.value;
        newProfile.gender = gender;
        newProfile.birthday = contactsRegisterBirthday.value;
        this.allUsers.push(newProfile);
        localStorage.setItem("allUsers", JSON.stringify(this.allUsers));
        document.location.href = "./log-in.html";
      }
  };
}
