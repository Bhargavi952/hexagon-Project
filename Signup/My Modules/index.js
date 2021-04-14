export {signup}

function signup(cont) {

    // var signupBox = document.createElement("div");

    // signupBox.setAttribute("id","signupBox");

   cont.innerHTML = `
    
    <div>
    <h1 class="join-unsplash text-align">Join Unsplash</h1>
    </div>

    <div>
    <p class="already-account text-align">Already have an account?<a href="#" id="login-color"> Login</a></p>
    </div>

    <div id="join-using-facebook"><a class="text-align" href="#" id="color-white-a"><i class="fab fa-facebook"></i> Join using Facebook</a></div>

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
 <button class="join-btn" onclick="join()" id="join-btn">Join</button>
    </div>

    <div class="term-privacy-text" class="margin">
    <a>By joining, you agree to the Terms and Privacy Policy.</a>
    </div>
    `
// return signupBox;
}

