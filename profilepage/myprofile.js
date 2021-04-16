var array = [{name1:"Bhargavi"}]
var like_data = JSON.parse( localStorage.getItem(''))
var collection_data = JSON.parse( localStorage.getItem(''))

var userdata = JSON.parse(localStorage.getItem('users')) || []
console.log(userdata)

var div1 = document.getElementById("user")
var h1 = document.createElement("h1")
h1.innerHTML = `<h1 style="margin-bottom:0px">${array[0].name1}</h1><a href="https://unsplash.com/account"><button id="btn1">Edit profile</button></a>`
div1.appendChild(h1)
var div2 = document.getElementById('username')
var p = document.createElement('p')
p.innerHTML = `<p>Download free, beautiful high-quality photos curated by ${array[0].name1}</p>
    <p style="color:gray;"> Not available for hire <a id="a_div1" style="color:gray;  text-decoration: underline; href="https://unsplash.com/account/hiring"> Update availability </a></p>`
div2.appendChild(p)
var nav = document.getElementById('profile_nav')
var nav_div = document.getElementById('nav_div')
nav_div.innerHTML = `<div><button>Phtos ${0}</button></div>
        <div><button onclick = "show(1)">Likes ${3}</button></div>
        <div><button  onclick = "show(2)">Collections ${2}</button></div>
        <div><button  onclick = "show(3)">Status</button></div>
        `
nav.appendChild(nav_div)


function show(val){
    if(val==1){
        let imgs = document.getElementById("display")
        imgs.innerHTML = ""
        let url = "https://images.unsplash.com/photo-1618251824331-d903ce9bdefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzMDE1MjcxMHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        var img = new Image()
        img.src = url
        imgs.appendChild(img)

        // like_data.forEach(element => {
        //     // var img = document.createElement("img")
        //     // img.innerHTML = ``
        //     // imgs.appendChild(img)
        // });
    }
    // else if(val==2){
    //     let imgs = document.getElementById("display")
    //     // collection_data.forEach(element => {
    //          // var img = document.createElement("img")
    //         // img.innerHTML = ``
    //         // imgs.appendChild(img)
    //     // });

    // }
    else if(val==2){
        // var data = document.getElementById('display')
        // let url = "img1.png"
        // let imgs = document.getElementById("display")
        // var img = new Image()
        // img.src = url
        // imgs.appendChild(img)


    
    }
    

}


//display ///
// let url = "/a/img/empty-states/photos.png"
// let imgs = document.getElementById("display")
// var img = new Image()
// img.src = url
// imgs.appendChild(img)

