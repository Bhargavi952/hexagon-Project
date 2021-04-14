function content(){
    let parent = document.createElement("div")
    parent.setAttribute("id","photos-main-div")

    window.addEventListener("scroll", function(){
        let {scrollTop,scrollHeight,clientHeight} = document.documentElement
        // console.log({scrollTop,scrollHeight,clientHeight})
        if(scrollTop + clientHeight == scrollHeight){
            getData()
        }
    })

    function getData(){
        fetch("https://api.unsplash.com/photos?per_page=15&client_id=UpbcrkfvAmWnk62lXxPIQgP4yeg8ws7UV4UV14XSzbU")
        .then(res => res.json())
        .then(res => {
            for(let i = 0; i < res.length; i++){
                let {urls:{regular}} = res[i]
                let div = document.createElement("div")
                div.setAttribute("id","photo-div")
                let img = document.createElement("img")
                img.src = regular
                img.setAttribute("id","photo")
                div.append(img)
                parent.append(div)
            }
            console.log(res)
        })
    }

    getData()

    return parent
}


export default content