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
