var like_data = JSON.parse( localStorage.getItem('likedphotos'))
var collection_data = JSON.parse( localStorage.getItem('collectphotos'))
var photos_data = JSON.parse( localStorage.getItem('images'))
console.log(photos_data)
console.log(like_data)
console.log(collection_data)
var userdata = JSON.parse(localStorage.getItem('User')) || []
console.log(userdata)

var div1 = document.getElementById("user")
var h1 = document.createElement("h1")
h1.innerHTML = `<h1 style="margin-bottom:0px">${userdata.firstName} ${userdata.lastName}</h1><a href="https://unsplash.com/account"><button id="btn1">Edit profile</button></a>`
div1.appendChild(h1)
var div2 = document.getElementById('username')
var p = document.createElement('p')
p.innerHTML = `<p>Download free, beautiful high-quality photos curated by ${userdata.firstName}</p>
    <p style="color:gray;  margin-top:3px ; "> Not available for hire <a id="a_div1" style="color:gray;  text-decoration: underline; href="https://unsplash.com/account/hiring"> Update availability </a></p>`
div2.appendChild(p)
var nav = document.getElementById('profile_nav')
var nav_div = document.getElementById('nav_div')
nav_div.innerHTML = `<div><button onclick = "photo()"> <i class="fas fa-image"></i> Photos ${photos_data.length}</button></div>
        <div><button onclick = "show(1)"><i class="fas fa-heart"></i> Likes ${like_data.length}</button></div>
        <div><button  onclick = "show(2)"><i class="fas fa-layer-group"></i> Collections ${collection_data.length}</button></div>
        <div><button  onclick = "status()"><i class="fas fa-signal"></i> Status</button></div>
        `
nav.appendChild(nav_div)
function photo(){
    let imgs = document.getElementById("display")
    imgs.innerHTML = ""
     let div1 = document.createElement("div")
        div1.innerHTML = `<img style="  height:300px ; width:400px" src=${photos_data} alt="photos">`
        imgs.appendChild(div1)
    
    
}

function show(val){
    
    if(val==1){
            let imgs = document.getElementById("display")
            imgs.innerHTML = ""
            for(let i =0;i<like_data.length;i++){
             let div1 = document.createElement("div")
                div1.innerHTML = `<img style="  height:300px ; width:430px" src=${like_data[i]} alt="likedphotos">`
                imgs.appendChild(div1)
      
        }

      
    }
    else if(val==2){
         let imgs = document.getElementById("display")
        imgs.innerHTML = ""
        for(let i =0;i<collection_data.length;i++){
            let div1 = document.createElement("div")
               div1.innerHTML = `<img style="  height:300px ; width:430px" src=${collection_data[i]} alt="photos">`
               imgs.appendChild(div1)
           }
   

    }
   
}
function status(){
    let imgs = document.getElementById("display")
    imgs.innerHTML = ""
    let div1 = document.createElement("div")
    div1.innerHTML = `   <img style="width: 30%; margin-left: 500px; margin-top: 100px;margin-bottom: 100px;" src="./image/img1.png" alt="">`
    imgs.appendChild(div1)
}
status()

