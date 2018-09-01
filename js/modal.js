/*	Объявляю необходимые переменные для личного кабинета*/

	var enterLink = document.querySelector(".enter-link");
	var popup = document.querySelector(".modal-login");
	var enterClose = document.querySelector(".enter-close");
	var form = popup.querySelector(".form-login");
	var login = popup.querySelector("[name=login]");
	var password = popup.querySelector("[name=password]");
	var storage = localStorage.getItem("login");
	var overlay = document.querySelector(".overlay");
	var overlayDark = document.querySelector(".overlay--dark");

	var regLink = document.querySelector(".registration-link");
	var regPopup = document.querySelector(".modal-registration");
	var regClose = document.querySelector(".reg-close");
	var reglogin = regPopup.querySelector("[name=name]");

/*
	var isStorageSupport = true;
	var storage = "";

	try {
		localStorage.getItem("login");
	} catch (err) {
		isStorageSupport = fulse;
	}*/

/*Функции для всплывания окна с личным кабинетом, его закрытия*/

	enterLink.addEventListener("click", function(evt) {
		evt.preventDefault();
		popup.classList.add("modal-show");
		overlay.classList.add("modal-show");
		if (storage) {
			login.value = storage;
			password.focus();
		} else {
			login.focus();
		}
	});

	enterClose.addEventListener("click", function(evt) {
		evt.preventDefault();
		popup.classList.remove("modal-show");
		overlay.classList.remove("modal-show");
		popup.classList.remove("modal-error");
	});

	form.addEventListener("submit", function(evt) {
		if (!login.value || !password.value) {
			evt.preventDefault();
			popup.classList.add("modal-error");
		} else {
			/*if (isStorageSupport) {
				localStorage.setItem("login", login.value);
			}*/
			localStorage.setItem("login", login.value);
		}
		
	});

	window.addEventListener("keydown", function(evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();

			if (popup.classList.contains("modal-show")) {
				popup.classList.remove("modal-show");
				overlay.classList.remove("modal-show");
				popup.classList.remove("modal-error");
			}
		}
	});

	regLink.addEventListener("click", function(evt) {
		evt.preventDefault();
		regPopup.classList.add("modal-show");
		overlay.classList.add("modal-show");
		reglogin.focus();
	});

	regClose.addEventListener("click", function(evt) {
		evt.preventDefault();
		regPopup.classList.remove("modal-show");
		overlay.classList.remove("modal-show");
		regPopup.classList.remove("modal-error");
	});

	window.addEventListener("keydown", function(evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();

			if (regPopup.classList.contains("modal-show")) {
				regPopup.classList.remove("modal-show");
				overlay.classList.remove("modal-show");
				regPopup.classList.remove("modal-error");
			}
		}
	});

	var openLink = document.querySelector(".about__open-photo-1");
	var photoPopup = document.querySelector(".popup__photo-1");
	var photoClose = document.querySelector(".photo-close");


	openLink.addEventListener("click", function(evt) {
		evt.preventDefault();
		photoPopup.classList.add("modal-show--fadeIn");
		overlayDark.classList.add("modal-show--fadeIn");
	});

	photoClose.addEventListener("click", function(evt) {
		evt.preventDefault();
		photoPopup.classList.remove("modal-show--fadeIn");
		overlayDark.classList.remove("modal-show--fadeIn");
	});

	window.addEventListener("keydown", function(evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();

			if (photoPopup.classList.contains("modal-show--fadeIn")) {
				photoPopup.classList.remove("modal-show--fadeIn");
				overlayDark.classList.remove("modal-show--fadeIn");
			}
		}
	});

	overlayDark.addEventListener("click", function(evt) {
		evt.preventDefault();
		photoPopup.classList.remove("modal-show--fadeIn");
		overlayDark.classList.remove("modal-show--fadeIn");
	});