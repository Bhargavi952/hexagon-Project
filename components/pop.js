function pop(){
    let mypop = document.createElement('div')
    mypop.setAttribute('class',"big-modal")
    mypop.innerHTML = `
    
    
    <div class="model-contain">

        </div>
        <div class="close">+</div>
    </div>

    
    
    `
    return mypop
}

export {pop,funcPOP}


function funcPOP(){
    document.getElementById('alert1').addEventListener('click',function(){
        document.querySelector('.big-modal').style.display = 'flex';
    });
    document.querySelector('.close').addEventListener('click',function(){
        document.querySelector('.big-modal').style.display = 'none'
    })
}