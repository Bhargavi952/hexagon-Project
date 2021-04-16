function Notification(){
   let myNotification = document.createElement('div')
   myNotification.setAttribute('class',"action1")
    myNotification.innerHTML = `
    
    <div class="profile21" onclick="Alertmenutoggle();">
     
        <a><i class="fas fa-bell"></i></a>
     

    </div>
    <div class="menu1">
        <h3>Notification</h3>
        <hr>
          <ul>
          <li><a href="">No Notification</a></li>
        
        </ul>
    </div>


`
return myNotification 
}
export {Notification}