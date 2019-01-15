var navUser = document.querySelector('.user-navigation');
    var UserToggle = document.querySelector('.user-navigation__toggle');

    navUser.classList.remove('user-navigation--nojs');

    UserToggle.addEventListener('click', function() {
      if (navUser.classList.contains('user-navigation--closed')) {
        navUser.classList.remove('user-navigation--closed');
        navUser.classList.add('user-navigation--opened');
      } else {
        navUser.classList.add('user-navigation--closed');
        navUser.classList.remove('user-navigation--opened');
      }
});