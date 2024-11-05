let myElement = document.querySelector("#hidden");

function toggle() {
	if (myElement.style.display == "block")
	{
		myElement.style.display = "none";
	}
	else {
		myElement.style.display = "block";
	}
}