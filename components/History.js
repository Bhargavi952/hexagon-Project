
export {History}
function History(cont) {

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
    <a style="float:right; font-weight: 800; font-size: 20px; margin-right: 2%">1.5k</a>

    </div>

    <div class="line"></div>

    <div class="box-width">
    <a class="icon"><i class="fas fa-user-friends"></i></a> <a class="icon-text">Top contributors</a>
    <a><img src="image (3).png" style="width: 120px; height: 20px; float:right"/></a>

    </div>

    </div>

    <div id="btn-box"><button id="btn">Submit to <a class="bold">History</a></button></div>
    </div>
   
   <div id="submit-btn-box" class="color-white"><button id="submit-btn">

   <a class="icon" id="plus-icon" href="#"><i class="fas fa-plus"></i></a>

   <a href="#" class="color-white" id="upload">Upload a new photo</a>
   
   </button></div>
  
    <h1 id="wallpaper-heading">History</h1><br/>
    <p><a id="epic-drone-text">Powerful photographs from the past — exploring monumental moments <br/> throughout our shared history.</a></p>
    `
}



