function profile(){
    let action = document.createElement('div')
    action.setAttribute('class',"action")
    action.innerHTML = `
    
   
    <div class="profile" onclick="menutoggle()">
        <img src="image/profileimage.jpg">
    </div>
    <div class="menu">
          <ul>
          <li><a href="">View profile</a></li>
          <li><a href="">Stats</a></li>
          <li><a href="">Account setting</a></li>
          <li><a href="">Logout</a></li>
        </ul>
    </div>

    
 `

 
 return action
}

export   {profile}



