let products = document.getElementById("products");

let black = document.getElementById("colorBlack");
let grey = document.getElementById("colorGrey");
let white = document.getElementById("colorWhite");
let normal = document.getElementById("typeNormal");
let zip = document.getElementById("typeZip");
let onsale = document.getElementById("saleOnSale");
let nosale = document.getElementById("saleNoSale");

let blacks = document.getElementsByClassName("black");
let greys = document.getElementsByClassName("grey");
let whites = document.getElementsByClassName("white");
let normals = document.getElementsByClassName("normal");
let zips = document.getElementsByClassName("zip");
let onsales = document.getElementsByClassName("onsale");
let nosales = document.getElementsByClassName("nosale");

black.addEventListener("click", function () {
    black.classList.toggle("checked");
    for (let i = 0; i < blacks.length; i++) {
        blacks[i].classList.toggle("filtered");
    }
})

grey.addEventListener("click", function () {
    grey.classList.toggle("checked");
    for (let i = 0; i < greys.length; i++) {
        greys[i].classList.toggle("filtered");
    }
})

white.addEventListener("click", function () {
    white.classList.toggle("checked");
    for (let i = 0; i < whites.length; i++) {
        whites[i].classList.toggle("filtered");
    }
})

normal.addEventListener("click", function () {
    normal.classList.toggle("checked");
    for (let i = 0; i < normals.length; i++) {
        normals[i].classList.toggle("filtered");
    }
})

zip.addEventListener("click", function () {
    zip.classList.toggle("checked");
    for (let i = 0; i < zips.length; i++) {
        zips[i].classList.toggle("filtered");
    }
})

onsale.addEventListener("click", function () {
    onsale.classList.toggle("checked");
    for (let i = 0; i < onsales.length; i++) {
        onsales[i].classList.toggle("filtered");
    }
})

nosale.addEventListener("click", function () {
    nosale.classList.toggle("checked");
    for (let i = 0; i < nosales.length; i++) {
        nosales[i].classList.toggle("filtered");
    }
})

function expand(e) {
    console.log(e);
    e.classList.toggle("expanded");
}