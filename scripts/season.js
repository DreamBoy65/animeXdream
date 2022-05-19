import { sidebar } from "../modules/sidebar.js"
import { check } from "../modules/check.js"

window.onload = async function() {
        sidebar()
        await check()
        
        let s = window.location.href.split("?")[1] || "demons"
        if(document.getElementById("watch")) {
                        document.getElementById("watch").remove()
                }
                let div = document.createElement("div")
                div.className = "watch"
                div.id = "watch"
                
                insert("side", "side", div)
                        
                
        
        for(let i = 1; i < Infinity; i++) {
                let data = await fetchG(s, i)
                if(data.length >= 1) {
                        console.log(data)
                        
                        for (let a of data) {
                                let div2 = document.createElement("div")
                                div2.className = "watch1"
                                div2.id = "watch1"
                        
                                div2.innerHTML = `<img src="${a.animeImg}" height="200px" width="160px"><p>${a.animeTitle}</p>`
                        
                                div2.addEventListener("click", () => window.location.href = "../pages/info.html?" + a.animeId)
                        
                                document.getElementById("watch").appendChild(div2)
                        }
                } else {
                        return;
                }
        }
}
