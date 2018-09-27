var registrationLink = document.querySelector(".registration-link");
var registrationForm = document.querySelector(".login__reg");
var registrationClose = document.querySelector(".login__close-reg");

registrationLink.addEventListener("click", function(evt) {
		evt.preventDefault();
		registrationForm.classList.add("modal-show");
	});

registrationClose.addEventListener("click", function(evt) {
		evt.preventDefault();
		registrationForm.classList.remove("modal-show");
	});

window.addEventListener("keydown", function(evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();

			if (registrationForm.classList.contains("modal-show")) {
				registrationForm.classList.remove("modal-show");
			}
		}
	});