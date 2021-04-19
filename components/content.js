function content(){
    let parent = document.createElement("div")
    parent.setAttribute("id","photos-main-div")

    let likedPhotosArr = JSON.parse(localStorage.getItem("likedphotos")) || []
    let collectPhotosArr = JSON.parse(localStorage.getItem("collectphotos")) || []
    
    window.addEventListener("scroll", function(){
        let {scrollTop,scrollHeight,clientHeight} = document.documentElement
        console.log({scrollTop,scrollHeight,clientHeight})
        if(scrollTop + clientHeight == scrollHeight){
            getData()
        }
    })
    function getData(){
        fetch("https://api.unsplash.com/photos?per_page=50&client_id=UpbcrkfvAmWnk62lXxPIQgP4yeg8ws7UV4UV14XSzbU")
        .then(res => res.json())
        .then(res => {

            for(let i = 0; i < res.length; i++){
                let {urls:{small}} = res[i]
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
                collectionBtn.addEventListener("click",function(){
                    let flag = 0
                    for(var i = 0; i < collectPhotosArr.length; i++){
                        if(collectPhotosArr[i]==small){
                            collectPhotosArr.splice(i,1)
                            localStorage.setItem("collectphotos",JSON.stringify(collectPhotosArr))
                            console.log("hi")
                            flag = 1
                            break
                        }
                    }
                    if(flag==1){
                        collectionBtn.style.backgroundColor = "white"
                    }
                    else{
                        collectionBtn.style.backgroundColor = "green" 
                        collectPhotos(small)
                    }
                })
                let likeBtn = document.createElement("button")
                likeBtn.innerHTML = `<i class="far fa-heart"></i>`
                likeBtn.setAttribute("id","photo-like-btn")
                likeBtn.addEventListener("click",function(){
                    let flag = 0
                    for(var i = 0; i < likedPhotosArr.length; i++){
                        if(likedPhotosArr[i]==small){
                            likedPhotosArr.splice(i,1)
                            localStorage.setItem("likedphotos",JSON.stringify(likedPhotosArr))
                            console.log("hi")
                            flag = 1
                            break
                        }
                    }
                    if(flag==1){
                        likeBtn.style.backgroundColor = "white"
                    }
                    else{
                        likeBtn.style.backgroundColor = "red" 
                        likedPhotos(small)
                    }
                })
                div.append(img,downloadBtn,collectionBtn,likeBtn)


                
                parent.append(div)
            }
            console.log(res)
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
        function likedPhotos(small){
            likedPhotosArr.push(small)
            localStorage.setItem("likedphotos",JSON.stringify(likedPhotosArr))

        }
        function collectPhotos(small){
            collectPhotosArr.push(small)
            localStorage.setItem("collectphotos",JSON.stringify(collectPhotosArr))

        }
    }
    getData()
    return parent
}
export default content