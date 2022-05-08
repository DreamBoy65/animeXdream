window.onload = async function () {
        let url = window.location.href.split("?")
        if(!url[1]) {
                url[1] = "naruto,2,naruto-episode-2"
        }
        if(url[1]) {
                load()
                
                url = url[1].split(",")
                let id = url[0]
                let eno = url[1]
                let epil = url[2]
                
                let data = await fetchd(id)
                let epilink = await fetche(epil)
                
                unload()
                
                console.log(epilink, data)
                
                let div = document.createElement("img")
                div.className = "epimg"
                div.src = data.animeImg
                
                insert("side", "side", div)
                
                div = document.createElement("a")
                div.className = "epspan"
                div.innerText = data.animeTitle
                div.href = "../pages/info.html?" + id
                
                insert("side", "side", div)
                
                div = document.createElement("span")
                div.className = "epdata"
                div.innerHTML = `<span class="epdata2">OthersNames:</span> ${data.otherNames}<br>
                <span class="epdata2">Type:</span> ${data.type}<br>
                <span class="epdata2">Status:</span> ${data.status}<br>
                <span class="epdata2">Episode:</span> ${eno}<br>
                <span class="epdata2">Progress:</span> ${eno}/${data.totalEpisodes}
                `
                
                insert("side", "side", div)
                
                div = document.createElement("video")
                div.className = "epv"
                div.src = epilink.sources[0].file
                div.controls = true
                
                
                insert("side", "side", div)
                
                if(parseInt(eno) !== 1) {
                        div = document.createElement("btn")
                        div.className = "prev"
                        div.innerText = `Ep ${parseInt(eno) - 1}`
                        
                        div.onclick = function() {
                                window.location.href = `../pages/episode.html?${id},${parseInt(eno) - 1},${id}-episode-${parseInt(eno) - 1}`
                        }
                        
                        insert("side", "side", div)
                }
                
                if(parseInt(eno) !== parseInt(data.totalEpisodes)) {
                        div = document.createElement("btn")
                        div.className = "next"
                        div.innerText = `Ep ${parseInt(eno) + 1}`
                        
                        div.onclick = function() {
                                window.location.href = `../pages/episode.html?${id},${parseInt(eno) + 1},${id}-episode-${parseInt(eno) + 1}`
                        }
                        
                        insert("side", "side", div)
                }
        }
}
