const darkModeButton = document.getElementById("darkMode");
const body = document.querySelector("body");

darkModeButton.addEventListener("click", () => {
  const currentClass = body.className;

  if (currentClass === "dark-mode") {
    body.className = "light-mode";
  } else {
    body.className = "dark-mode";
  }
});