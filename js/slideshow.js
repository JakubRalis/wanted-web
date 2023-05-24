document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".main-image")
    const first = slides[0]
    const second = slides[1]
    const third = slides[2]

    if (window.innerWidth <= 1245 && window.innerWidth > 750) {
        first.setAttribute("src", "./media/skater-1245px.jpg")
        second.setAttribute("src", "./media/skater2-1245px.jpg")
        third.setAttribute("src", "./media/skater3-1245px.jpg")
    }
    else if (window.innerWidth <= 750) {
        first.setAttribute("src", "./media/skater-750px.jpg")
        second.setAttribute("src", "./media/skater2-750px.jpg")
        third.setAttribute("src", "./media/skater3-750px.jpg")
    }
})