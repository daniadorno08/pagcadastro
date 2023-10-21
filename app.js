var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.classList.add("sign-in-js");
   body.classList.remove("sign-up-js");
});

btnSignup.addEventListener("click", function () {
    body.classList.remove("sign-in-js");
    body.classList.add("sign-up-js");
})
