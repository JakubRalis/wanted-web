document.addEventListener("DOMContentLoaded", (evt) => {
    const buttons = document.querySelectorAll(".available");
    for (const button of buttons) {
        button.addEventListener("click", (e) => {
            console.log(e.currentTarget);
            if (e.currentTarget.classList.contains("active")) {
                e.currentTarget.classList.remove("active");
            }
            else {
                for (let i = 0; i < buttons.length; i++) {
                    if (buttons[i].classList.contains("active")) {
                        buttons[i].classList.remove("active");
                    }
                }
                e.currentTarget.classList.add("active");
            }
        })
    }
})