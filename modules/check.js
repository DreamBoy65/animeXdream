function check() {
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
        
        //= function(k) {
                //console.log(k)
       // }
}

export { check }
