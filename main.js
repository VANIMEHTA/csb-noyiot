const firstname = document.getElementById("firstn");
const lastname = document.getElementById("lastn");
const email = document.getElementById("email");
const password = document.getElementById("password");
const fname = document.getElementById("fnameempty");
const lname = document.getElementById("lnameempty");
const emailempty = document.getElementById("emailempty");
const pwd = document.getElementById("pwdempty");

function validatefname() {
  var x = firstname.value;
  if (x === " ") {
    fname.classList.toggle("show");
    return false;
  }
  return true;
}
function validatelname() {
  var y = lastname.value;
  if (y === " ") {
    lname.classList.toggle("show");
    return false;
  }
  return true;
}
function validatepwd() {
  var z = password.value;
  if (z === " ") {
    pwd.classList.toggle("show");
    return false;
  }
  return true;
}

function validateemail() {
  var a = email.value;
  if (a === " ") {
    emailempty.classList.toggle("show");
    return false;
  }
  return true;
}
function validate() {
  validateemail();
  validatepwd();
  validatelname();
  validatefname();
}
