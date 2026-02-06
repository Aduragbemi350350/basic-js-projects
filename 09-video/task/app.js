// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.



const btns = document.querySelectorAll(".btn")
const video = document.querySelector('.video')
const payload = document.querySelector('.preloader__item')


//DOMContentLoaded: This execute before the whole document gets loaded
//Load: This execute once the whole document is loaded


window.addEventListener("load", () => {
    payload.style.display = "none"
})



const handleBtn = (e) => {
    if (e.currentTarget.dataset.id === "play") {
        video.play()
    } else if (e.currentTarget.dataset.id === "pause") {
        video.pause()
    }
}

btns.forEach((btn) => {
    btn.addEventListener("click", handleBtn)
})