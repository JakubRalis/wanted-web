let buttons = document.querySelectorAll(".sizes-item");

function active(e) {
    console.log(e);
    if (e.classList.contains("active")) {
        e.classList.remove("active");
    }
    else {
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].classList.contains("active")) {
                buttons[i].classList.remove("active");
            }
        }
        e.classList.add("active");
    }
}