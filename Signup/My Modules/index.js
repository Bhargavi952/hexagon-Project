export {signup}

function signup(cont) {

    // var signupBox = document.createElement("div");

    // signupBox.setAttribute("id","signupBox");

   cont.innerHTML = `
    
    <div>
    <h1 class="join-unsplash text-align">Join Unsplash</h1>
    </div>

    <div>
    <p class="already-account text-align">Already have an account?<a href="#"> Login</a></p>
    </div>

    <div id="join-using-facebook" class="color"><a class="text-align"><i class="fab fa-facebook"></i> Join using Facebook</a></div>

    <div class="text-align or-text">OR</div>

    <div id="name">

    <div>
    <label class="name-label">First name</label><br/>
<input type="text" class="nameInpt"/>
    </div>

    <div>
    <label class="name-label">Last name</label><br/>
    <input type="text" class="nameInpt"/>
    </div>

    </div>

    <div>
    <label class="name-label">Email address</label><br/>
    <input type="email" class="nameInpt email-input"/>
    </div>

    <div>
    <label class="name-label">Username
    <a>(only letters, numbers, and underscores)</a></label><br/>
    <input type="username" class="nameInpt email-input"/>
    </div>

    <div>
    <label class="name-label">Password
    <a>(min. 6 char)</a></label><br/>
    <input type="password" class="nameInpt email-input"/>
    </div>

    <div>
 <button class="join-btn">join</button>
    </div>

    <div class="term-privacy-text">
    <a>By joining, you agree to the Terms and Privacy Policy.</a>
    </div>
    `
// return signupBox;
}