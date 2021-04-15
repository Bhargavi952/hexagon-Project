function pop(){
    let mypop = document.createElement('div')
    mypop.setAttribute('class',"big-modal")
    mypop.innerHTML = `
    
    
    <div class="model-contain">
        <div id="icon">
            <img src="IMG\logo-kindmealpawa.png">
            <h1>Join KindMeal For FREE Now</h1>
            <p>Please select the type of membership to proceed</p>
        </div>
        <div id="page1">
            <a href="signup.html"> <img src="IMG\imagepawan.png" /></a>
            <div>
                <h2>Food Lover</h2>
                <p>Join FREE to enjoy yummy deals, Share
                    reviews & meet our community of
                    compassionate food lovers
                </p>
            </div>
        </div>
        <div id="page2">
            <a href="signuprest.html"> <img src="IMG\image2pawan.png" /></a>

         
        </div>
        <div id="last">
            <div>
                <h3 class="memberlogin">Member Login</h3>
            </div>
            <div>
                <h3>Forgot password?</h3>
            </div>
        </div>
        <div class="close">+</div>
    </div>

    
    
    `
    return mypop
}

export {pop,funcPOP}


function funcPOP(){
    document.getElementById('alert1').addEventListener('click',function(){
        document.querySelector('.big-modal').style.display = 'flex';
    });
    document.querySelector('.close').addEventListener('click',function(){
        document.querySelector('.big-modal').style.display = 'none'
    })
}