async function check() {
        window.onoffline = function() {
                let div = document.createElement("div")
                div.className = "off"
                div.id = "off"
                div.innerText = "Sorry, But you are offline!"
                
                document.body.appendChild(div)
                
                window.ononline = function() {
                        document.body.removeChild(document.getElementById ("off"))
                        window.location.href = window.location.href
                }
        }
        
        let datat = await findu(localStorage.getItem("id"))
        
        if (datat) {
                document.getElementById("usernamep").innerText = datat.username
                document.getElementById("usernamea").href = "../pages/user.html"
                document.getElementById("watchoo").href = "../pages/favorites.html"
                document.getElementById("favoo").href = "../pages/watchlist.html"
        }
        
        //= function(k) {
                //console.log(k)
       // }
}

export { check }
