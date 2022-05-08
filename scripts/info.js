import { sidebar } from "../modules/sidebar.js"

window.onload = async function() {
        sidebar()
        let id = window.location.href.split("?")[1]
        
        if(id) {
                load()
                let data = await fetchd(id)
                
                let div = document.createElement("div")
                div.className = "ia"
                div.innerHTML = `<div class="iaa"><img src="${data.animeImg}" height="200" width="150"><p>
                <span>Title:</span> ${data.animeTitle}
                <br><span>Type:</span> ${data.type}
                <br><span>Released:</span> ${data.releasedDate}
                <br><span>Status:</span> ${data.status}
                <br><span>Episodes:</span> ${data.totalEpisodes}
                <br><span>Genres:</span> ${data.genres.join(" , ")}
                <br><span>OtherNames:</span> ${data.otherNames}
                <br><span>Summary:</span> ${data.synopsis}
                <br></p</div>`
                insert("side", "side", div)
                
                let div3 = document.createElement("div")
                div3.className = "epid"
                div3.id = "epid"
                insert("side", "side", div3)
                
                for(let i = 1; i <= parseInt(data.totalEpisodes); i++) {
                        /*let dat = await axios(`https://animexninja-api.dreamprince.repl.co/api/watching/${id}/${i}`)
                        
                        console.log(dat)*/
                        
                        let btn = document.createElement("btn")
                        btn.className = "epib"
                        btn.id = "epib"
                        btn.innerText = `Ep: ${i}`
                        
                        btn.onclick = function() {
                                window.location.href = `../pages/episode.html?${id},${i},${id}-episode-${i}`
                        }
                        
                        document.getElementById("epid").appendChild(btn)
                }
                
                unload()
        }
}
