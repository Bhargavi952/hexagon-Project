

function content(){
    let parent = document.createElement("div")
    parent.setAttribute("id","photos-main-div")

    window.addEventListener("scroll", function(){
        let {scrollTop,scrollHeight,clientHeight} = document.documentElement
        console.log({scrollTop,scrollHeight,clientHeight})
        if(scrollTop + clientHeight == scrollHeight){
            getData()
        }
    })

    function getData(){
        fetch("https://api.unsplash.com/photos?per_page=15&client_id=UpbcrkfvAmWnk62lXxPIQgP4yeg8ws7UV4UV14XSzbU")
        .then(res => res.json())
        .then(res => {
            for(let i = 0; i < res.length; i++){
                let {urls:{small}} = res[i]
                let div = document.createElement("div")
                div.setAttribute("id","photo-div")
                let img = document.createElement("img")
                img.src = small
                img.setAttribute("id","photo")
                let btn = document.createElement("button")
                btn.innerHTML = `like`
                btn.addEventListener("click",function(){

                    let fileName = myImageLike(small)
                    saveAs(small,fileName)
                })
                btn.setAttribute("id","photo-btn")
                let btn1 = document.createElement("button")
                btn1.innerHTML = `collection`
                btn1.setAttribute("id","photo-btn1")
                div.append(img,btn,btn1)
                parent.append(div)
            }
            console.log(res)
        })
        function myImageLike(){
            // let a = document.createElement("a")
            // a.setAttribute("href","data:text/plain;charset=utf-8," + encodeURIComponent(text))
            // a.setAttribute("download",k)
            // a.style.display = "none"
            // document.body.appendChild(a)
            // a.click()
            // document.body.removeChild(a)
        }
    }

    getData()

    return parent
}


export default content

