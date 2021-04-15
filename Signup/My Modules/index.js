export { signup }

function signup(cont) {

    // var signupBox = document.createElement("div");

    // signupBox.setAttribute("id","signupBox");

    cont.innerHTML = `
    
    <div>
    <h1 class="join-unsplash text-align">Join Unsplash</h1>
    </div>

    <div>
    <p class="already-account text-align">Already have an account?<a href="http://127.0.0.1:5500/hexagon-Project/Signup/login.html" id="login-color"> Login</a></p>
    </div>

    <div id="join-using-facebook"><a class="text-align" href="https://www.facebook.com/login.php?skip_api_login=1&api_key=779900868722692&kid_directed_site=0&app_id=779900868722692&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.10%2Fdialog%2Foauth%3Fclient_id%3D779900868722692%26redirect_uri%3Dhttps%253A%252F%252Funsplash.com%252Fusers%252Fauth%252Ffacebook%252Fcallback%26response_type%3Dcode%26scope%3Demail%26state%3Dda3c9670d348aaf0dfbcc3327f7e45d29af6b01e8f8f5279%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Da8006acd-c903-4a78-90d8-f8bb74a0a894%26tp%3Dunspecified&cancel_url=https%3A%2F%2Funsplash.com%2Fusers%2Fauth%2Ffacebook%2Fcallback%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3Dda3c9670d348aaf0dfbcc3327f7e45d29af6b01e8f8f5279%23_%3D_&display=page&locale=hi_IN&pl_dbl=0" id="color-white-a"><i class="fab fa-facebook"></i> Join using Facebook</a></div>

    <div class="text-align or-text">OR</div>

    <div id="name" class="margin">

    <div>
    <label class="name-label">First name</label><br/>
<input type="text" class="nameInpt" id="first-name"/>
    </div>

    <div>
    <label class="name-label">Last name</label><br/>
    <input type="text" class="nameInpt" id="last-name"/>
    </div>

    </div>

    <div class="margin">
    <label class="name-label">Email address</label><br/>
    <input type="email" class="nameInpt email-input" id="email"/>
    </div>

    <div class="margin">
    <label class="name-label">Username
    <a class="color-grey">(only letters, numbers, and underscores)</a></label><br/>
    <input type="username" class="nameInpt email-input" id="user-name"/>
    </div>

    <div class="margin">
    <label class="name-label">Password
    <a class="color-grey">(min. 6 char)</a></label><br/>
    <input type="password" class="nameInpt email-input" id="password"/>
    </div>

    <div class="margin">
 <button class="join-btn" id="join-btn">Join</button>
    </div>

    <div class="term-privacy-text" class="margin">
    <a>By joining, you agree to the Terms and Privacy Policy.</a>
    </div>
    `
    //return signupBox;
}

