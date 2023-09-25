const buttonElement = document.querySelector(".crazyButton");

buttonElement.addEventListener("mouseenter", moveButton);

function moveButton() {
  const offsetTop =
    Math.random() * (window.innerHeight - buttonElement.clientHeight);
  const offsetLeft =
    Math.random() * (window.innerWidth - buttonElement.clientWidth);

  buttonElement.style.top = offsetTop + "px";
  buttonElement.style.left = offsetLeft + "px";
}
