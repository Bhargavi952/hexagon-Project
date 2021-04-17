function threeDotsPop(){
    var dotsDiv = document.createElement("div")
    dotsDiv.setAttribute("class","dots-div")

    

    dotsDiv.innerHTML = `
        <div class="content-list-div">
            <ul>
                <li>Blog</li>
                <li>Topics</li>
                <li>Collections</li>
                <li>Community</li>
                <li>History</li>
                <li>Made with Unsplash</li>
                <li>API/Developers</li>
                <li>Official Apps</li>
            </ul>
        </div>
        <div id="icon-div">
            <i class="fab fa-twitter"></i>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
        </div>
        <hr>
        <div id="footer-content">
            <span>Help</span>
            <ul>
                <li>License</li>   
            </ul>
            <ul>
                <li>Press</li>
            </ul>
            <ul>
                <li>Join the team</li>
            </ul>
        </div>
    `
    return dotsDiv
}

export default threeDotsPop