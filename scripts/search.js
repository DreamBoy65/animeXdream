import { sidebar } from "../modules/sidebar.js"
import { check } from "../modules/check.js"

window.onload = async function() {
        sidebar()
        await check()
        
        let div = document.createElement("div") 
        div.className = "sdiv"
        div.innerHTML = `<input name="s" placeholder="tokyoghoul" id="sin"> <button id="sb">>></button>`
        insert("side", "side", div)
        
        document.getElementById("sb").onclick = async function() {
                let input = document.getElementById("sin").value
                
                if(input) {
                        if(document.getElementById("watch")) {
                                document.getElementById("watch").remove()
                        }
                        
                        let div = document.createElement("div")
                        div.className = "watch"
                        div.id = "watch"
                        
                        insert("side", "side", div)
                        
                        for(let i = 1; 1 < Infinity; i++) {
                                let data = await f(input, i)
                                
                                if(data.length >= 1) {
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
        }
}

async function f(arg, page = 1) {
        return await axios(`https://gogoanime.herokuapp.com/search?keyw=${arg}&&page=${page}`)
                .then(data => {
                        return data.data
                }).catch(e => {
                        return e
                })
}
