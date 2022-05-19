import { sidebar } from "../modules/sidebar.js"
import { check } from "../modules/check.js"

window.onload = async function() {
        await check()
        document.getElementById("form").addEventListener('submit', async(e) => {
                e.preventDefault()
                
                const data = Object.fromEntries(new FormData(e.target).entries());
                
                let dat = await findu(data.username)
                
                if(dat) {
                        if(dat.password !== data.pass) {
                                return err("Wrong password!\nChange username to create new account or join discord to change password!")
                        }
                        
                        let div = document.createElement("div")
                        div.className = "wlcm"
                        div.innerText = "Welcome Back, " + dat.username + "!"
                        document.body.appendChild(div)
                        
                        localStorage.setItem("id", data.username)
                } else {
                        let dat = await createu(data.username, {
                                username: data.username,
                                password: data.pass
                        })
                        
                        localStorage.setItem("id", data.username)
                        
                        let div = document.createElement("div")
                        div.className = "wlcm"
                        div.innerText = "Welcome, " + dat.data.username + "!"
                        document.body.appendChild(div)
                }
               setTimeout(() => window.location.href = "../index.html", 2000)
        });
}
