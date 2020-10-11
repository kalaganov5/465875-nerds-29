/*Contact form*/
let writeBtn = document.querySelector(".main-footer-button");
let modalForm = document.querySelector(".modal-hidden")
let modalCloseBtn = document.querySelector(".modal-close");

writeBtn.removeAttribute("href");
writeBtn.style.cursor = "pointer";
writeBtn.onclick = function() {
	modalForm.classList.toggle("modal-hidden");
}

modalCloseBtn.onclick = function() {
	modalForm.classList.toggle("modal-hidden");
}


/*hide jpg map and marker*/
let map = document.querySelector("#main-footer-map");
map.style.zIndex = "2";
let mapMarker = document.querySelector(".main-footer-top-block-map");
mapMarker.classList.add("main-footer-top-block-map-js");
let containerMap = document.querySelector(".main-footer-top-js");
containerMap.classList.remove("main-footer-top-js");
