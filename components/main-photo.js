function mainPhoto(){
    let mainPhotoDiv = document.createElement("div")
    mainPhotoDiv.setAttribute("id", "main-photo")
    mainPhotoDiv.innerHTML = `
        <img src="https://images.unsplash.com/photo-1615818499660-30bb5816e1c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="">
        <div id="main-photo-content">
            <span>Unsplash</span>
            <h1>The internet’s source of <a href="#">freely-usable images.</a> <br>Powered by creators everywhere.</h1>
            <input id="imagesearch" type="text" placeholder="Search free high-resolution photos">
            <p>Trending:flowerwallpapersbackgroundshappylove</p>
        </div>
    `
    return mainPhotoDiv
}

export default mainPhoto