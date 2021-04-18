
export {wallpaper}


function wallpaper(cont) {

    cont.innerHTML = `

    <div id="left-cont">

    <div id="left-status-box">

    <div class="box-width">

    <a class="icon"><i class="fas fa-bolt"></i></a> <a class="icon-text">Status</a>
    <div id="open"><a id="dot-icon"><i class="fas fa-circle"></i></a><a>Open</a></div>

    </div>

    <div class="line"></div>

    <div class="box-width">
    <a class="icon"><i class="fas fa-user-alt"></i></a> <a class="icon-text">Curator</a>
    </div>

    <div class="line"></div>

    <div class="box-width">
    <a class="icon"><i class="fas fa-image"></i></a> <a  class="icon-text">Contributions</a>
    </div>

    <div class="line"></div>

    <div class="box-width">
    <a class="icon"><i class="fas fa-user-friends"></i></a> <a class="icon-text">Top contributors</a>
    </div>

    </div>

    <div id="btn-box"><button id="btn">Submit to <a class="bold">Wallpapers</a></button></div>
    </div>
   
   <div id="submit-btn-box" class="color-white"><button id="submit-btn">

   <a class="icon" id="plus-icon" href="#"><i class="fas fa-plus"></i></a>

   <a href="#" class="color-white" id="upload">Upload a new photo</a>
   
   </button></div>
  
    <h1 id="wallpaper-heading">Wallpapers</h1><br/>
    <p><a id="epic-drone-text">From epic drone shots to inspiring moments in nature, find free HD<br/> wallpapers worthy of your mobile and desktop screens. Finally.</a></p>
    `
}



