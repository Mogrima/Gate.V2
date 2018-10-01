var overlay = document.querySelector(".overlay");

var registrationLink = document.querySelector(".registration-link");
var registrationForm = document.querySelector(".login__reg");
var registrationClose = document.querySelector(".login__close-reg");

registrationLink.addEventListener("click", function(evt) {
		evt.preventDefault();
		registrationForm.classList.add("modal-show");
		overlay.classList.add("modal-show");
	});

registrationClose.addEventListener("click", function(evt) {
		evt.preventDefault();
		registrationForm.classList.remove("modal-show");
		overlay.classList.remove("modal-show");
	});

window.addEventListener("keydown", function(evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();

			if (registrationForm.classList.contains("modal-show")) {
				registrationForm.classList.remove("modal-show");
				overlay.classList.remove("modal-show");
			}
		}
	});

var loginLink = document.querySelector(".login-link");
var loginForm = document.querySelector(".login__log");
var loginClose = document.querySelector(".login__close-log");
var login = loginForm.querySelector("[name=user-name]");
var password = loginForm.querySelector("[name=user-pass]");
var storage = localStorage.getItem("user-name");

loginLink.addEventListener("click", function(evt) {
		evt.preventDefault();
		loginForm.classList.add("modal-show");
		overlay.classList.add("modal-show");
		if (storage) {
			login.value = storage;
			password.focus();
		} else {
			login.focus();
		}
	});

loginClose.addEventListener("click", function(evt) {
		evt.preventDefault();
		loginForm.classList.remove("modal-show");
		overlay.classList.remove("modal-show");
	});

window.addEventListener("keydown", function(evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();

			if (loginForm.classList.contains("modal-show")) {
				loginForm.classList.remove("modal-show");
				overlay.classList.remove("modal-show");
			}
		}
	});