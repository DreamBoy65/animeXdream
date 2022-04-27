async function fetch(type, args) {
        
       return await axios(`https://animexninja-api.dreamprince.repl.co/api/${type}${args ? `/${args}` : "/"}`)
       .then(data => {
                return data.data.results
        }).catch(e => {
                return e
        })
}

async function fetchg() {
        return await axios("https://animexninja-api.dreamprince.repl.co/api/genrelist")
                .then(data => {
                        return data.data.list
                }).catch(e => {
                        return e
                })
}

function load() {
        let div  = document.createElement("div")
        div.className = "loadimg"
        div.id = "loadimg"
        
        insert("side", "side", div)
}

function unload() {
        remove("side", "loadimg")
}

function insert(pnode, ch, el) {
        let pn = document.getElementById(pnode).parentNode
        let che = document.getElementById(ch)
        
        return pn.insertBefore(el, che)
}

function remove(pnode, el) {
        return document.getElementById(pnode).parentNode.removeChild(document.getElementById(el))
}
