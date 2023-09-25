let nameInput = document.getElementById("textField");
let nameDiv = document.getElementById("output");
let button = document.getElementById("button");

function setName() {
  nameDiv.innerText = nameInput.value;
}

button.addEventListener("click", setName);
