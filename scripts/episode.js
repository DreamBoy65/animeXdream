import { sidebar } from "../modules/sidebar.js"
import { check } from "../modules/check.js"

window.onload = async function () {
        sidebar()
        await check()
        
        let url = window.location.href.split("?")
        if(!url[1]) {
                url[1] = "naruto,2,naruto-episode-2"
        }
        if(url[1]) {
                load()
                
                url = url[1].split(",")
                let id = url[0]
                let eno = url[1]
                let epil = url[2]
                
                let data = await fetchd(id)
                let epilink = await fetche(epil)
                
                unload()
                
                let div = document.createElement("img")
                div.className = "epimg"
                div.src = data.animeImg
                
                insert("side", "side", div)
                
                div = document.createElement("a")
                div.className = "epspan"
                div.innerText = data.animeTitle
                div.href = "../pages/info.html?" + id
                
                insert("side", "side", div)
                
                div = document.createElement("span")
                div.className = "epdata"
                div.innerHTML = `<span class="epdata2">OthersNames:</span> ${data.otherNames}<br>
                <span class="epdata2">Type:</span> ${data.type}<br>
                <span class="epdata2">Status:</span> ${data.status}<br>
                <span class="epdata2">Episode:</span> ${eno}<br>
                <span class="epdata2">Progress:</span> ${eno}/${data.totalEpisodes}
                `
                
                insert("side", "side", div)
                
                div = document.createElement("div")
                div.id = "player1"
                div.innerHTML = `<video id="player" controls crossorigin></video>`
                
                insert("side", "side", div)
                
                if (Hls.isSupported()) {
                        var hls = new Hls();
                        hls.loadSource(epilink.sources[0].file);
                        hls.attachMedia(document.getElementById("player"));
                }
                hls.on(Hls.Events.MANIFEST_PARSED, () => {
                        player = loadPlayer(hls, data);
                });
                
                if(parseInt(eno) !== 1) {
                        div = document.createElement("btn")
                        div.className = "prev"
                        div.innerText = `Ep ${parseInt(eno) - 1}`
                        
                        div.onclick = function() {
                                window.location.href = `../pages/episode.html?${id},${parseInt(eno) - 1},${id}-episode-${parseInt(eno) - 1}`
                        }
                        
                        insert("side", "side", div)
                }
                
                if(parseInt(eno) !== parseInt(data.totalEpisodes)) {
                        div = document.createElement("btn")
                        div.className = "next"
                        div.innerText = `Ep ${parseInt(eno) + 1}`
                        
                        div.onclick = function() {
                                window.location.href = `../pages/episode.html?${id},${parseInt(eno) + 1},${id}-episode-${parseInt(eno) + 1}`
                        }
                        
                        insert("side", "side", div)
                }
                
                div = document.createElement("div")
                div.className = "epibtnlist"
                div.id = "epibtnlist"
                
                insert("side", "side", div)
                
                for(let i = 1; i <= data.totalEpisodes; i++) {
                        let div = document.createElement("btn")
                        div.className = "epibtn"
                        div.innerText = "Ep: " + i
                        
                        if(i <= eno) {
                                div.classList.toggle("epibtn2")
                        }
                        
                        div.onclick = function() {
                                window.location.href = "../pages/episode.html?" + id + "," + i + "," + id + "-episode-" + i
                        }
                        
                        document.getElementById("epibtnlist").appendChild(div)
                }
        }
}

function updateQuality(hls, newQuality) {
        hls.levels.forEach((level, levelIndex) => {
                if (level.height === newQuality) {
                        hls.currentLevel = levelIndex;
                }
        });
}

function loadPlayer(hls, data) {
        const defaultOptions = {
                //controls: ["download",  "settings", "volume", "progress", "fullscreen", "play", "current-time", "mute", "play-large"],
               tooltips: {
                       controls: true
               },
               previewThumbnails: {
                       enable: true,
                       src: data.animeImg
               }
        };
        
        let availableQualities = hls.levels.map((i) => i.height)
        // Add new qualities to option
        // You can add and customize this object according to your flash player
        defaultOptions.quality = {
                default: availableQualities[1],
                options: availableQualities.reverse(),
                // this ensures Plyr to use Hls to update quality level
                forced: true,
                onChange: (e) => updateQuality(hls, e)
        }
        // Initialize here       
        const player = new Plyr(document.getElementById("player"), defaultOptions);
        // Start HLS load on play event
        // Handle HLS quality changes
        return player;
}
