const darkModeButton = document.getElementById("darkMode");
const body = document.querySelector("body");
const darkModeIcon = document.getElementById("Dark-Mode-Icon"); // Added variable for the dark mode icon link

darkModeButton.addEventListener("click", () => {
  const currentClass = body.className;

  if (currentClass === "dark-mode") {
    body.className = "light-mode";
    darkModeIcon.innerHTML = '<i class="fas fa-moon"></i> Dark Mode'; // Change the icon and text
  } else {
    body.className = "dark-mode";
    darkModeIcon.innerHTML = '<i class="fas fa-sun"></i> Light Mode'; // Change the icon and text
  }
});

document.getElementById("emailButton").addEventListener("click", function () {
  var myEmail = "ayushsingh916@gmail.com";
  var emailSubject = "Hello from my website!";
  var emailBody = "Write your message here...";

  var mailtoLink =
    "mailto:" +
    encodeURIComponent(myEmail) +
    "?subject=" +
    encodeURIComponent(emailSubject) +
    "&body=" +
    encodeURIComponent(emailBody);
  window.open(mailtoLink, "_blank");
});
