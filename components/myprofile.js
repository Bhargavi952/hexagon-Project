var like_data = JSON.parse( localStorage.getItem(''))
var collection_data = JSON.parse( localStorage.getItem(''))

var userdata = JSON.parse(localStorage.getItem('User')) || []
console.log(userdata)

var div1 = document.getElementById("user")
var h1 = document.createElement("h1")
h1.innerHTML = `<h1 style="margin-bottom:0px">${userdata.firstName}${userdata.lastName}</h1><a href="https://unsplash.com/account"><button id="btn1">Edit profile</button></a>`
div1.appendChild(h1)
var div2 = document.getElementById('username')
var p = document.createElement('p')
p.innerHTML = `<p>Download free, beautiful high-quality photos curated by ${userdata.firstName}</p>
    <p style="color:gray;  margin-top:3px ; "> Not available for hire <a id="a_div1" style="color:gray;  text-decoration: underline; href="https://unsplash.com/account/hiring"> Update availability </a></p>`
div2.appendChild(p)
var nav = document.getElementById('profile_nav')
var nav_div = document.getElementById('nav_div')
nav_div.innerHTML = `<div><button onclick = "photo()"> <i class="fas fa-image"></i> Phtos ${0}</button></div>
        <div><button onclick = "show(1)"><i class="fas fa-heart"></i> Likes ${2}</button></div>
        <div><button  onclick = "show(2)"><i class="fas fa-layer-group"></i> Collections ${1}</button></div>
        <div><button  onclick = "show(3 )"><i class="fas fa-signal"></i> Status</button></div>
        `
nav.appendChild(nav_div)

function show(val){
    
    if(val==1){
        let imgs = document.getElementById("display")
        imgs.innerHTML = ""
        let url = "https://images.unsplash.com/photo-1618251824331-d903ce9bdefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzMDE1MjcxMHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        var img = new Image()
        img.style.marginTop = "60px"
        img.style.marginRight = "20px"
        img.style.marginLeft = "20px"
        img.src = url
        let url1 = "https://images.unsplash.com/photo-1618450684024-55f2d7b7740a?ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDJ8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        var img1 = new Image()
        img1.style.marginTop = "60px"
        img1.src = url1
        imgs.append(img,img1)
    }
    else if(val==2){
        let imgs = document.getElementById("display")
        imgs.innerHTML = ""
        let url = "https://imaes..com/photo-1618251824331-d903ce9bdefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzMDE1MjcxMHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        var img = new Image()
        img.style.marginTop = "60px"
        img.style.marginRight = "20px"
        img.style.marginLeft = "20px"
        img.src = url
        let url1 = "https://images.unsplash.com/photo-1618450684024-55f2d7b7740a?ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDJ8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        var img1 = new Image()
        img1.style.marginTop = "60px"
        img1.src = url1
        imgs.append(img1)
    }
    

}


//display ///
// let url = "/a/img/empty-states/photos.png"
// let imgs = document.getElementById("display")
// var img = new Image()
// img.src = url
// imgs.appendChild(img)

