"use strict";
/*Contact form*/
let writeBtn = document.querySelector(".main-footer-button");
let modalForm = document.querySelector(".modal-hidden");
let modalCloseBtn = document.querySelector(".modal-close");

writeBtn.onclick = function(evt) {
  evt.preventDefault();
  modalForm.classList.toggle("modal-hidden");
  setTimeout(function() {
    modalForm.classList.add("modal-animation");
  }, 100);
};

modalCloseBtn.onclick = function(evt) {
	evt.preventDefault();
  modalForm.classList.remove("modal-animation");
  modalForm.classList.add("modal-animation-hide");
  setTimeout(function() {
    modalForm.classList.toggle("modal-hidden");
    modalForm.classList.remove("modal-animation-hide");
  }, 100);
};

/*hide jpg map and marker*/
let map = document.querySelector("#main-footer-map");
map.style.zIndex = "2";
let containerMap = document.querySelector(".main-footer-top-js");
containerMap.classList.remove("main-footer-top-js");

/*check form input*/
const formInputName = document.querySelector("#modal-contact-form-name");
const formInputEmail = document.querySelector("#modal-contact-form-email");
const formTextarea = document.querySelector("#modal-contact-form-message");

//check name
formInputName.onblur = function() {
  if (!this.value) {
    this.classList.add("invalid");
  }
};

formInputName.onfocus = function() {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
  }
};

//check email
formInputEmail.onblur = function() {
  if (!this.value.includes("@")) { // не email
    this.classList.add("invalid");
  }
};

formInputEmail.onfocus = function() {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
  }
};

//check message
formTextarea.onblur = function() {
  if (!this.value) {
    this.classList.add("invalid");
  }
};

formTextarea.onfocus = function() {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
  }
};
