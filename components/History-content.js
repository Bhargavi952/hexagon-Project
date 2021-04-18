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
        fetch("https://api.unsplash.com/search/photos?query=History&client_id=UpbcrkfvAmWnk62lXxPIQgP4yeg8ws7UV4UV14XSzbU")
        .then(res => res.json())
        .then(res => {
            console.log(res.results)
            for(let i = 0; i <res.results.length; i++){
                let {urls:{small}} = res.results[i]
                let div = document.createElement("div")
                div.setAttribute("id","photo-div")
                let img = document.createElement("img")
                img.src = small
                img.setAttribute("id","photo")
                let downloadBtn = document.createElement("button")
                downloadBtn.innerHTML = `<i class="fas fa-arrow-down"></i>`
                downloadBtn.addEventListener("click",function(){
                    myImageLike(small)
                })
                downloadBtn.setAttribute("id","photo-download-btn")
                let collectionBtn = document.createElement("button")
                collectionBtn.innerHTML = `<i class="fas fa-plus"></i>`
                collectionBtn.setAttribute("id","photo-collection-btn")
                let likeBtn = document.createElement("button")
                likeBtn.innerHTML = `<i class="far fa-heart"></i>`
                likeBtn.setAttribute("id","photo-like-btn")
                div.append(img,downloadBtn,collectionBtn,likeBtn)
                parent.append(div)
            }
          
        })
        function myImageLike(small){
            axios({
                url: small,
                method: "GET",
                responseType: "blob"
            })
            .then((response) => {
                console.log(response)
                const url = window.URL.createObjectURL(new Blob([response.data]))
                const link = document.createElement("a")
                link.href = url
                link.setAttribute("download","image.png")
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
            })
        }
    }
  getData()
 return parent
}
export default content