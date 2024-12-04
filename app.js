function sign() {
  let UserName = document.getElementById("sname").value;
  let UserEmail = document.getElementById("semail").value;
  let UserPass = document.getElementById("spass").value;

  if (UserName === "" && UserEmail === "" && UserPass === "") {
    document.getElementById("Error_name").innerHTML = "Please Enter your Name";
    document.getElementById("Error_email").innerHTML =
      "Please Enter your Email";
    document.getElementById("Error_pass").innerHTML =
      "Please Enter your Password";
    document.getElementById("Error_name").style.color = "red";
    document.getElementById("Error_email").style.color = "red";
    document.getElementById("Error_pass").style.color = "red";
    return;
  }
  if (UserPass.length < 6) {
    document.getElementById("password").innerHTML =
      "Password must be at least 6 characters long";
    document.getElementById("password").style.color = "red";
    return;
  }

  document.getElementById("sname").value = "";
  document.getElementById("semail").value = "";
  document.getElementById("spass").value = "";

  localStorage.setItem("username", UserName);
  localStorage.setItem("useremail", UserEmail);
  localStorage.setItem("userpassword", UserPass);

  location.href = "./sign.html";
}

function sigUp() {
  let loginName = document.getElementById("lname").value;
  let loginEmail = document.getElementById("lpass").value;

  document.getElementById("lname").value = "";
  document.getElementById("lpass").value = "";

  let storedUserName = localStorage.getItem("username");
  let storedUserEmail = localStorage.getItem("useremail");

  if (storedUserName === loginName && storedUserEmail === loginEmail) {
    location.href = "./print.html";
  } else {
    document.getElementById("loginemail-error").innerHTML =
      "Username  Not Found";
    document.getElementById("loginemail-error").style.color = "red";
    document.getElementById("loginpass-error").innerHTML = "Incorrect Email ";
    document.getElementById("loginpass-error").style.color = "red";

    return;
  }
}
