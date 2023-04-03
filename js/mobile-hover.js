let productImage = document.getElementById("productImage");

productImage.addEventListener("touchstart", function() {
    productImage.classList.add("touched")
}, true);

productImage.addEventListener("touchend", function() {
    productImage.classList.remove("touched")
}, true);