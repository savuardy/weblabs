'use strict';

const profiles = [
  {
    email: 'vlad@email.com',
    name: 'Vlad',
    password: 'asdgsadg',
    gender: 'Male',
    birthday: '09-09-2004',
  },
  {
    email: '2@eamil.com',
    name: 'Nick',
    password: 'sdfsd',
    gender: 'Male',
    birthday: '08-07-1994',
  },
];

if (!localStorage.getItem('allUsers')) {
  localStorage.setItem('allUsers', JSON.stringify(profiles));
}

if (!localStorage.getItem('currentUserIndex')) {
  localStorage.setItem('currentUserIndex', -1);
}
