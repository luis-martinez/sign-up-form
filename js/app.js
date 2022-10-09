function checkPassword(){
  let password = document.getElementById("password").value;
  let confirm_password = document.getElementById("confirm-password").value;
  let match = true;

  if (password != confirm_password) {
    alert("Passwords don't match!");
    match = false;
  } else {
    alert("Passwords match!");
  }
  return match;
}

document.getElementById("form").onsubmit = checkPassword;
