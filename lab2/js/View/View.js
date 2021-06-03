class View {
  constructor() {
    this.profileName = document.querySelector('.profile-name');
    this.profileEmail = document.querySelector('.profile-email');
    this.profileBirthdate = document.querySelector('.profile-birthday');
    this.profileGender = document.querySelector('.profile-gender');
  }

  showProfile = (currentUserIndexView, allUsersView) => {
    if (+currentUserIndexView === -1) {
      return;
    } else {
      this.profileName.innerHTML = allUsersView[currentUserIndexView].name;
      this.profileEmail.innerHTML = allUsersView[currentUserIndexView].email;
      this.profileBirthdate.innerHTML = allUsersView[currentUserIndexView].birthday;
      this.profileGender.innerHTML = allUsersView[currentUserIndexView].gender;
    }
  };
}
