function pop(){
    let mypop = document.createElement('div')
    // mypop.setAttribute('class',"big-modal")
    mypop.innerHTML = `
    
    <div class ="big-modal">
    <div class="model-contain">
   
      <p id="first">Recent Searches </P>
         <div class="grid">
         <div class="griditem">Pretty girl</div>
         <div class="griditem">Ramaadan</div>
         <div class="griditem">Boy</div>
         </div>
         <p id="second">Treanding Searches </P>
         <div class="grid1">
         <div class="griditem1">Gita</div>
         <div class="griditem1">quran</div>
         <div class="griditem1">Jesus Christ</div>
         <div class="griditem1">April</div>
         </div>

         <p id="third">Treanding Topics </P>
         <div class="grid2">
         <div class="griditem2"><img src="https://images.unsplash.com/photo-1429637119272-20043840c013?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=38&h=38&q=60"/>Experimental</div>
         <div class="griditem2"><img src="https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=38&h=38&q=60"/>Fashion</div>
         <div class="griditem2"><img src="https://images.unsplash.com/27/type-set.jpg?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=38&h=38&q=60"/>Technology</div>
         </div>
         <p id="four">Trending Collections </P>
         <div class="grid3">
         <div class="griditem3">Marine</div>
         <div class="griditem3">Dance</div>
      
         </div>
         </div>
        
        <div class="close">+</div>
    </div>

    
    
    `
    return mypop
}

export {pop,funcPOP}


function funcPOP(){
    document.querySelector('.myinput').addEventListener('focus',function(){
        console.log("clicked")
        document.querySelector('.big-modal').style.display = 'flex';
    });
    document.querySelector('.close').addEventListener('click',function(){
        document.querySelector('.big-modal').style.display = 'none'
    })
}
