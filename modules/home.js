async function home() {
        load()
        
        let popular = []
        let ra = []
        let genre = []
        let d = Date.now()
        
        let genres = await fetchg()
        
        for(let i = 1; i <= 2; i++) {
                let res = await fetch("popular", `${i}`)
                res.forEach(async e => {
                        let an = await fetch("details", e.id)
                        
                        popular.push({...e, ...an[0]
                        })
                })
                
                let res1 = await fetch("recentlyadded", `${i}`)
                res1.forEach(e => ra.push(e))
                
                let gen = await fetch("genre", `${genres[Math.floor(Math.random() * genres.length)]}/1`)
                
                gen.forEach(e => genre.push(e))
        }
        
        unload()
        
        let pnode = document.getElementById("side").parentNode
        
        let p = document.createElement("p")
        p.className = "toppicks"
        p.innerText = "TOP PICKS FOR YOU:"
        
        insert("side", "side", p)
        
        let root = document.createElement("div")
        root.id = "root"
        root.classList = "root"
        insert("side", "side", root)
        
        for(let e of popular) {
                let div = document.createElement("div")
                div.id = e.id + 1
                div.className = "home1"
                div.innerHTML = `<div id="${e.id + 1}" class="homea"><img src="${e.image}" width="100" height="150"><p id="${e.id}" class="homep">${e.title}</p><span class="homes">${e.type}</span></div>`
                root.appendChild(div)
        }
        
        let p2 = document.createElement("p")
        p2.id = "ra"
        p2.innerText = "RECENTLY ADDED:"
        p2.className = "ra"
        
        insert("side", "side", p2)
        
        let root1 = document.createElement("div")
        root1.id = "root1"
        root1.classList = "root1"
        insert("side", "side", root1)
        
        for (let e of ra) {
                let div = document.createElement("div")
                div.id = e.id + 2
                div.className = "ra1"
                div.innerHTML = `<div id="${e.id + 1}" class="raa"><img src="${e.image}" width="100" height="150"><p id="${e.id}" class="rap">${e.title}</p><span class="ras">Episode ${e.episodenumber}</span></div>`
                root1.appendChild(div)
        }
        
        let root2 = document.createElement("div")
        root2.className = "root2"
        insert("side", "side", root2)
        
        for(let e of genre) {
                let div = document.createElement("div")
                div.id = e.id + 3
                div.classList = "ca"
                div.innerHTML = `<div id="${e.id + 3}" class="caa"><img src="${e.image}" width="300" height="250"><p id="${e.id}" class="cap">${e.title}</p></div>`
                
                root2.appendChild(div)
        }
        
        console.log(Math.floor(Math.floor(Date.now() - d) / 60) / 60 + "m")
}

export { home }
