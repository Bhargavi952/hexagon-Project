
export {Nature}
function Nature(cont) {

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
    <a><img src="image (2).png" style="width: 29px; height: 23px; float: right"/></a>

    </div>

    <div class="line"></div>

    <div class="box-width">
    <a class="icon"><i class="fas fa-image"></i></a> <a  class="icon-text">Contributions</a>
    <a style="float:right; font-weight: 800; font-size: 20px; margin-right: 2%">8.5k</a>

    </div>

    <div class="line"></div>

    <div class="box-width">
    <a class="icon"><i class="fas fa-user-friends"></i></a> <a class="icon-text">Top contributors</a>
    <a><img src="image (3).png" style="width: 120px; height: 20px; float:right"/></a>

    </div>

    </div>

    <div id="btn-box"><button id="btn">Submit to <a class="bold">Nature</a></button></div>
    </div>
   
   <div id="submit-btn-box" class="color-white"><button id="submit-btn">

   <a class="icon" id="plus-icon" href="#"><i class="fas fa-plus"></i></a>

   <a href="#" class="color-white" id="upload">Upload a new photo</a>
   
   </button></div>
  
    <h1 id="wallpaper-heading">Nature</h1><br/>
    <p><a id="epic-drone-text">Let’s celebrate the magic of Mother Earth — with images of everything our <br> planet has to offer, from stunning seascapes, starry skies, and everything in <br> between.</a></p>
    `
}



