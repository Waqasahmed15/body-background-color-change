const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.id === "gray") {
      body.style.background = "grey";
      body.style.color = "white";
    } else if (e.target.id === "white") {
      body.style.background = "white";
      body.style.color = "black";
    } else if (e.target.id === "blue") {
      body.style.background = "blue";
      body.style.color = "white";
    } else {
      body.style.background = "yellow";
      body.style.color = "tomato";
    }
  });
});
