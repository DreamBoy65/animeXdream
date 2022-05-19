import { sidebar } from "../modules/sidebar.js"
import { check } from "../modules/check.js"

window.onload = async function() {
        sidebar()
        await check()
        load()
        
        let popular = []
        let ra = []
        let genre = []
        
        let genres = await fetchg()
        
        for(let i = 1; i <= 2; i++) {
                let res = await fetchp(`${i}`)
                res.forEach(e => 
                        popular.push(e)
                )
                
                let res1 = await fetchr(`${i}`)
                res1.forEach(e => ra.push(e))
                
                let gen = await fetchG(`${genres[Math.floor(Math.random() * genres.length)]}`, i)
                
                if(!gen.error) {
                        gen.forEach(e => genre.push(e))
                }
        }
        
        unload()
        
        let pnode = document.getElementById("side").parentNode
        
        let p = document.createElement("p")
        p.className = "toppicks"
        p.innerText = "TOP PICKS FOR YOU:"
        
        insert("side", "side", p)
        
        let root = document.createElement("div")
        root.id = "root"
        root.classList = "root"
        insert("side", "side", root)
        
        for(let e of popular) {
                let div = document.createElement("div")
                div.id = e.id + 1
                div.className = "home1"
                div.innerHTML = `<div id="${e.animeId}" class="homea"><img src="${e.animeImg}" width="100" height="150"><p id="${e.animeId}" class="homep">${e.animeTitle}</p><span class="homes">Released ${e.releasedDate}</span></div>`
                
                root.appendChild(div)
                
                div.addEventListener("click", () => window.location.href = "../pages/info.html?" + e.animeId)
        }
        
        let p2 = document.createElement("p")
        p2.id = "ra"
        p2.innerText = "RECENTLY ADDED:"
        p2.className = "ra"
        
        insert("side", "side", p2)
        
        let root1 = document.createElement("div")
        root1.id = "root1"
        root1.classList = "root1"
        insert("side", "side", root1)
        
        for (let e of ra) {
                let div = document.createElement("div")
                div.id = e.id + 2
                div.className = "ra1"
                div.innerHTML = `<div id="${e.episodeId + 1}" class="raa"><img src="${e.animeImg}" width="100" height="150"><p id="${e.episodeId}" class="rap">${e.animeTitle}</p><span class="ras">Episode ${e.episodeNum}</span></div>`
                root1.appendChild(div)
                
                div.addEventListener("click", () => window.location.href = "../pages/episode.html?" + e.episodeId.split("-").filter(c => c !== "episode" && isNaN(c)).join("-") + "," + e.episodeNum + "," + e.episodeId)
        }
        
        let root2 = document.createElement("div")
        root2.className = "root2"
        insert("side", "side", root2)
        
        for(let e of genre) {
                let data = await fetchd(e.animeId)
                let div = document.createElement("div")
                div.id = e.id + 3
                div.classList = "ca"
                div.innerHTML = `<div id="${e.animeId + 3}" class="caa"><img src="${e.animeImg}" width="180" height="216"><span id="${e.animeId}" class="cap"><span class="cap2">Title:</span> ${e.animeTitle}<br><br><span class="cap2">Genres:</span> ${data.genres.join(" , ")}<br><br><span class="cap2">Type:</span> ${data.type}<br><br><span class="cap2">Status:</span> ${data.status} </span></div>`
                
                root2.appendChild(div)
                
                div.addEventListener("click", () => window.location.href = "../pages/info.html?" + e.animeId)
        }
}
