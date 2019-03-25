window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let tab = document.querySelectorAll('.profile__toggle');
    let info = document.querySelector('.profile__toggles');
    let tabContent = document.querySelectorAll('.profile__content');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tab[i].classList.remove('profile__toggle--active');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
            tab[b].classList.add('profile__toggle--active');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('profile__toggle')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    var profileMenu = document.querySelector('.profile-menu');
    var ProfileBtn = document.querySelector('.profile-menu__button');

    profileMenu.classList.remove('profile-menu--nojs');

    ProfileBtn.addEventListener('click', function () {
        if (profileMenu.classList.contains('profile-menu--closed')) {
            profileMenu.classList.remove('profile-menu--closed');
            profileMenu.classList.add('profile-menu--opened');
        } else {
            profileMenu.classList.add('profile-menu--closed');
            profileMenu.classList.remove('profile-menu--opened');
        }
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();

            if (profileMenu.classList.contains("profile-menu--opened")) {
                profileMenu.classList.remove("profile-menu--opened");
                profileMenu.classList.add("profile-menu--closed");
            }
        }
    });

    document.addEventListener('click', function (event) {
        if (!profileMenu.contains(event.target) && profileMenu.classList.contains("profile-menu--opened")) {
            profileMenu.classList.remove("profile-menu--opened");
            profileMenu.classList.add("profile-menu--closed");
        }
    });
});