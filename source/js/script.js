var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.header__nav-toggle--opened');

navToggle.classList.remove('header__nav-toggle--nojs');

navToggle.addEventListener('click', function() {
  if (navToggle.classList.contains('header__nav-toggle--opened')) {
    navMain.classList.remove('main-nav');
    navMain.classList.add('main-nav--closed');
    navToggle.classList.remove('header__nav-toggle--opened');
    navToggle.classList.add('header__nav-toggle--closed');
  } else {
    navMain.classList.add('main-nav');
    navMain.classList.remove('main-nav--closed');
    navToggle.classList.remove('header__nav-toggle--closed');
    navToggle.classList.add('header__nav-toggle--opened');
  }
});

var btnSubmit = document.querySelector('.site-button--user-form');
var form = document.querySelector('.user-form');
var row = form.querySelectorAll('.user-form__wrapper--required');
var field = form.querySelectorAll('.user-form__input:required');

form.addEventListener('input', function() {
  for (var i=0; i<=field.length-1; i++) {
    if(field[i].validity.valid) {
      row[i].classList.remove('user-form__wrapper--error');
    }
  }
});

btnSubmit.addEventListener('click', function (evt) {
  for (var i=0; i<=field.length-1; i++) {
    if (!field[i].validity.valid) {
      row[i].classList.add('user-form__wrapper--error');
      evt.preventDefault();
    }
  }
});
