function sidebar() {
    let btn = document.getElementById("btn")

    btn.onclick = function() {
        btn.classList.toggle("showbtn")

        document.getElementById("side").classList.toggle("showside")
    }
}

export { sidebar }