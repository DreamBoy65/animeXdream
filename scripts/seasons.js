import { sidebar } from "../modules/sidebar.js"
import { check } from "../modules/check.js"

window.onload = async function() {
        sidebar()
        await check()
        
        let div = document.createElement("div")
        div.className = "slist"
        
        insert("side", "side", div)
        let genes = await fetchg()
        
        for(let a of genes) {
                let div1 = document.createElement("div")
                div1.className = "slist1"
                div1.innerHTML = a
                
                div1.addEventListener("click", () => {
                        window.location.href = "../pages/season.html?" + a
                })
                
                div.appendChild(div1)
        }
}
