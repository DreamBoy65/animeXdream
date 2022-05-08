let dburl = "https://animex-f4cbb-default-rtdb.firebaseio.com/users"

async function fetchp(args) {
        
       return await axios(`https://gogoanime.herokuapp.com/popular?page=${args}`)
       .then(data => {
                return data.data
        }).catch(e => {
                return e
        })
}

async function fetchr(args) {

        return await axios(`https://gogoanime.herokuapp.com/recent-release?page=${args}&&type=1`)
                .then(data => {
                        return data.data
                }).catch(e => {
                        return e
                })
}

async function fetchd(args) {

        return await axios(`https://gogoanime.herokuapp.com/anime-details/${args}`)
                .then(data => {
                        return data.data
                }).catch(e => {
                        return e
                })
}

async function fetchG(args, page) {

        return await axios(`https://gogoanime.herokuapp.com/genre/${args}?page=${page}`)
                .then(data => {
                        return data.data
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

async function fetche(id) {
        return await axios(`https://gogoanime.herokuapp.com/vidcdn/watch/${id}`)
        .then(data => {
                console.log(data)
                return data.data
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

async function findu (id) {
      let data = await axios({
              url: dburl+`/${id}.json`,
              method: "GET"
      })
      
      if(data.data && data.status === 200) {
              return data.data
      } else {
              return false;
      }
}

async function createu (id, Data) {
        let data = await axios({
                url: dburl+`/${id}.json`,
                method: "PUT",
                data: Data
        })
        
        return data;
}
