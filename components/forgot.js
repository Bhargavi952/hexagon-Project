function reset() {
    var email = document.getElementById("email").value
    var cond = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(cond)) {
        window.location.href = "../login_forgot.html"

    } else {
        alert("Enter valid Email id")
    }

}