const firstname = document.getElementById("firstn");
const lastname = document.getElementById("lastn");
const email = document.getElementById("email");
const password = document.getElementById("password");

const emailempty = document.getElementById("emailempty");
const pwd = document.getElementById("pwdempty");
const button = document.getElementById("btn");
const error = document.querySelectorAll(".form_p");
function validatefname() {
  var x = firstname.value;

  if (x == "") {
    error[0].classList.add("show");
  } else {
    error[0].classList.remove("show");
  }
}

function validatelname() {
  var y = lastname.value;
  if (y == "") {
    error[1].classList.add("show");
  } else {
    error[1].classList.remove("show");
  }
}
function validatepwd() {
  var z = password.value;
  if (z == "") {
    pwd.style.display = "block";
    return false;
  }
  return true;
}
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function validateemail() {
  var a = email.value;
  if (a.match(regex)) {
    error[2].classList.remove("show");
  } else {
    error[2].classList.add("show");
  }
}
function validate() {
  validateemail();
  validatepwd();
  validatelname();
  validatefname();
}
button.addEventListener("click", (e) => {
  e.preventDefault();
  validate();
});
