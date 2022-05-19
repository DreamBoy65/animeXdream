import { sidebar } from "../modules/sidebar.js"
import { check } from "../modules/check.js"

window.onload = async function() {
        sidebar()
        await check()
        
        let data = await findu(localStorage.getItem("id"))
        
        let list = data.watchlist.filter(c => c !== "yo").filter(c => c !== null)
        
        if(list.length >= 1) {
                load()
                
                let div = document.createElement("div")
                div.className = "watch"
                div.id = "watch"
                
                insert("side", "side", div)
                
                let data = []
                
                for(let a of list) {
                        let d = await fetchd(a)
                        data.push({
                                id: a,
                                animeImg: d.animeImg,
                                animeTitle: d.animeTitle
                        })
                }
                
                for(let a of data) {
                        let div2 = document.createElement("div")
                        div2.className = "watch1"
                        div2.id = "watch1"
                        
                        div2.innerHTML = `<img src="${a.animeImg}" height="200px" width="160px"><p>${a.animeTitle}</p>`
                        
                        div2.addEventListener("click", () => window.location.href = "../pages/info.html?" + a.id)
                        
                        document.getElementById("watch").appendChild(div2)
                }
                
                unload()
        } else {
                err("No Anime found!")
        }
}
