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

document.getElementById("emailButton").addEventListener("click", function() {
  var myEmail = "ayushsingh916@gmail.com";
  var emailSubject = "Hello from my website!";
  var emailBody = "Write your message here...";

  var mailtoLink = "mailto:" + encodeURIComponent(myEmail) +
                   "?subject=" + encodeURIComponent(emailSubject) +
                   "&body=" + encodeURIComponent(emailBody);
  window.open(mailtoLink, "_blank");
});