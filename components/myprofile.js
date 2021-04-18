var like_data = JSON.parse( localStorage.getItem('likedphotos'))
console.log(like_data)
var collection_data = ["https://images.unsplash.com/photo-1618450684024-55f2d7b7740a?ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDJ8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1543269664-76bc3997d9ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjI4NTZ8MXwxfGFsbHwxNnx8fHx8fDJ8fDE2MTg3MTUzNjk&ixlib=rb-1.2.1&q=80&w=400",
"https://images.unsplash.com/photo-1618579858669-572597bcc560?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjI4NTZ8MHwxfGFsbHw0fHx8fHx8Mnx8MTYxODcxNTM2OQ&ixlib=rb-1.2.1&q=80&w=400"]

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
nav_div.innerHTML = `<div><button onclick = "photo()"> <i class="fas fa-image"></i> Photos ${0}</button></div>
        <div><button onclick = "show(1)"><i class="fas fa-heart"></i> Likes ${like_data.length}</button></div>
        <div><button  onclick = "show(2)"><i class="fas fa-layer-group"></i> Collections ${collection_data.length}</button></div>
        <div><button  onclick = "show(3 )"><i class="fas fa-signal"></i> Status</button></div>
        `
nav.appendChild(nav_div)

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
    else if(val==3){
        let imgs = document.getElementById("display")
       imgs.innerHTML = ""
       for(let i =0;i<collection_data.length;i++){
           let div1 = document.createElement("div")
              div1.innerHTML = `<img style="  height:300px ; width:430px" src=${collection_data[i]} alt="photos">`
              imgs.appendChild(div1)
          }
  

   }
    

}

