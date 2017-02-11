var overlay = document.querySelector(".overlay");
var contactBlock = document.querySelector(".contact-block");
var contactBlockOpenButton = document.querySelector(".contacts .btn");
var contactBlockCloseButton = document.querySelector(".contact-block .cross")
var contactForm = contactBlock.querySelector(".contact-form");
var userNameField = contactBlock.querySelector("[name=user-name]");
var userEmailField = contactBlock.querySelector("[name=user-email]");
var userCommentField = contactBlock.querySelector("[name=user-letter]");
var userNameInStorage = localStorage.getItem("userName");
var userEmailInStorage = localStorage.getItem("userEmail");

contactBlockOpenButton.addEventListener("click", function(event) {
	event.preventDefault();
	overlay.classList.add("show-block");
	contactBlock.classList.add("show-block");
	
	if (userNameInStorage) {
		userNameField.value = userNameInStorage;
		if (userEmailInStorage) {
			userEmailField.value = userEmailInStorage;
			userCommentField.focus();
		} else {
			userEmailField.focus();
		}
	} else {
		userNameField.focus();
	}
});

contactBlockCloseButton.addEventListener("click", function(event) {
	event.preventDefault();
	overlay.classList.remove("show-block");
	contactBlock.classList.remove("show-block");
	contactBlock.classList.remove("error-block");
});

contactForm.addEventListener("submit", function(event) {
	if (!userNameField.value || !userEmailField.value || !userCommentField.value) {
		event.preventDefault();
		contactBlock.classList.remove("error-block");
		contactBlock.offsetWidth = contactBlock.offsetWidth;
		contactBlock.classList.add("error-block");
	} else {
		localStorage.setItem("userName", userNameField.value);
		localStorage.setItem("userEmail", userEmailField.value);
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (contactBlock.classList.contains("show-block")) {
			overlay.classList.remove("show-block");
			contactBlock.classList.remove("show-block");
			contactBlock.classList.remove("error-block");
		}
	}
});