function login() {
    var login_data = JSON.parse(localStorage.getItem('users'))
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    login_data.forEach(element => {
        if (element.Email == email && element.Password == password) {
            window.location.href = "#" //home page  
        }
        else {
            var alertmsg = document.getElementById("alertmsg")
            alertmsg.style.display = 'block'

        }

    });
}
document.getElementById('closeButton').addEventListener('click', function (e) {
    e.preventDefault();
    this.parentNode.style.display = 'none';
}, false);