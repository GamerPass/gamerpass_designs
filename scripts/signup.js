

var modalButton = document.getElementById("signup-button");
var modal = document.getElementById("signup-modal");
var backdrop = document.getElementById("modal-backdrop");
var closeX = document.getElementById("close-x");

function toggleModal() {

	modal.classList.toggle("signup__hidden");
	backdrop.classList.toggle("signup__hidden");
	// console.log("modal opening");
}

modalButton.addEventListener("click", toggleModal);
backdrop.addEventListener("click", toggleModal);
closeX.addEventListener("click", toggleModal);