function changeColor() {
  document.body.style.backgroundColor = "lightblue";
}

document
  .getElementById("buttonTwoColor")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "pink";
  });

document.getElementById("button3").addEventListener("mouseenter", function () {
  document.body.style.backgroundColor = "green";
});
