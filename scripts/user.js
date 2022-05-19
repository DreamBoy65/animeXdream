import { sidebar } from "../modules/sidebar.js"
import { check } from "../modules/check.js"

window.onload = async function() {
        sidebar()
        await check()
        
        let data = await findu(localStorage.getItem("id"))
        
        if(data) {
                let div = document.createElement("div")
                div.className = "user"
                
                div.innerHTML = `<img src="../src/original.jpg"><br><span>${data.username}</span>`
                
                insert("side", "side", div)
                
                div = document.createElement("div")
                div.className = "logout"
                div.innerHTML = "Logout."
                
                div.addEventListener("click", () => {
                        localStorage.removeItem("id")
                        err("Logout success!")
                        
                        setTimeout(() => {
                                window.location.href = "../index.html"
                           }, 2000)
                        })
                
                insert("side", "side", div)
                
                div = document.createElement("div")
                div.className = "chpass"
                div.innerHTML = "Change Password."
                div.addEventListener("click", async() => {
                        let div1 = document.createElement("div")
                        div1.className = "chpass1"
                        div1.innerHTML = `<input placeholder="New Password" id="chpassi"><button id="chpass1">>></button>`
                        insert("side", "side", div1)
                        
                        setTimeout(async() => {
                                
                                document.getElementById("chpass1").onclick = async function() {
                                        let i = document.getElementById("chpassi").value
                                        
                                        if(i.split("").length < 5) {
                                                return err("Password must be longer than 5 chars.")
                                        }
                                        
                                        let d2 = await findu(localStorage.getItem("id"))
                                        
                                        d2.password = i
                                        
                                        await createu(localStorage.getItem("id"), d2)
                                        
                                        err("Password Changed!")
                                        
                                        setTimeout(() => {
                                                window.location.href = window.location.href
                                        }, 2000)
                                }
                        }, 2000)
                })
                
                insert("side", "side", div)
                
                div = document.createElement("div")
                div.className = "chwatch"
                div.innerHTML = "WatchList."
                
                div.addEventListener("click", () => window.location.href = "../pages/watchlist.html")
                
                insert("side", "side", div)
                
                div = document.createElement("div")
                div.className = "chfav"
                div.innerHTML = "Favorites."
                
                div.addEventListener("click", () => window.location.href = "../pages/favorites.html")
                
                insert("side", "side", div)
                
                
        } else {
                err("No Data!")
        }
}
