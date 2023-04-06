let products = document.getElementsByClassName("products-box-link");

function touch(e) {
    console.log(e);
    for (let i = 0; i < products.length; i++) {
        if (products[i].classList.contains("touched") && products[i] != e) {
            products[i].classList.remove("touched");
        }
    }
    e.classList.add("touched");
}