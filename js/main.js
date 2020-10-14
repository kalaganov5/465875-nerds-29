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
let mapMarker = document.querySelector(".main-footer-top-block-map");
mapMarker.classList.add("main-footer-top-block-map-js");
let containerMap = document.querySelector(".main-footer-top-js");
containerMap.classList.remove("main-footer-top-js");
