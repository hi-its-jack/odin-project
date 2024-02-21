
const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirm_password");
const passwordMessage = document.getElementById("password_message");

confirmPasswordField.addEventListener("input", function() {
  if (passwordField.value === confirmPasswordField.value) {
    passwordMessage.textContent = "Passwords match!";
    passwordMessage.style.color = "green";
  } else {
    passwordMessage.textContent = "Passwords do not match!";
    passwordMessage.style.color = "red";
  }
});