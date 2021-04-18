

async function filter(e){
      let datadiv = document.createElement('div')
      let urlarr = []
        let response = await fetch(`https://api.unsplash.com/search/photos?query=${e}&client_id=UpbcrkfvAmWnk62lXxPIQgP4yeg8ws7UV4UV14XSzbU`)
    
        let data = await response.json()
        data.results.forEach((el)=>{
            let {urls:{small}} = el
            // console.log(small)
            // shomydata(small)
            let img = document.createElement('img')
            img.setAttribute('src',`${small}`)
            img.setAttribute("class","img-wrapper")





            datadiv.appendChild(img)

        })
        // console.log(data.results[0].urls.small)
      return datadiv
    }






// function showmydata(u){
//     console.log(u)
//     let mydiv = document.createElement('div')
  
//     mydiv.innerHTML = `
//      <img src="${u}">
    
    
//     `
  
//     return mydiv
// }

export {filter}