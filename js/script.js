var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var blockTitle = document.querySelector('.page-header__title-block');
var navList = document.querySelector('.main-nav__list');

navMain.classList.remove('main-nav--nojs');
blockTitle.classList.remove('page-header__title-block--nojs');
navList.classList.remove('main-nav__list--nojs');

navToggle.addEventListener('click', function() {
  if (navList.classList.contains('main-nav__list--closed')) {
    navList.classList.remove('main-nav__list--closed');
  } else {
    navList.classList.add('main-nav__list--closed');
  }

  if (navToggle.classList.contains('main-nav__toggle--closed')) {
    navToggle.classList.remove('main-nav__toggle--closed');
  } else {
    navToggle.classList.add('main-nav__toggle--closed');
  }
});
