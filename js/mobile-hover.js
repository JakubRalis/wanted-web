let productslink = document.querySelectorAll(".products-box-link");

function touch(e) {
    console.log(e);
    for (let i = 0; i < productslink.length; i++) {
        if (productslink[i].classList.contains("touched") && productslink[i] != e) {
            productslink[i].classList.remove("touched");
        }
    }
    e.classList.add("touched");
}