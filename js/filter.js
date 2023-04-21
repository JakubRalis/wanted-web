let products = document.getElementById("products");

let black = document.getElementById("colorBlack");
let grey = document.getElementById("colorGrey");
let white = document.getElementById("colorWhite");
let normal = document.getElementById("typeNormal");
let zip = document.getElementById("typeZip");
let onsale = document.getElementById("saleOnSale");

let blacks = document.querySelectorAll(".black");
let greys = document.querySelectorAll(".grey");
let whites = document.querySelectorAll(".white");
let normals = document.querySelectorAll(".normal");
let zips = document.querySelectorAll(".zip");
let onsales = document.querySelectorAll(".onsale");

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


let body = document.getElementById("body");
body.addEventListener("click", function(e) {
    let filters = document.querySelectorAll(".filterlist-item")
    for (let i = 0; i < filters.length; i++) {
        if (filters[i] == e.target) {
            return;
        }
        else {
            let inside = filters[i].getElementsByTagName("*");
            for (let u = 0; u < inside.length; u++) {
                if (inside[u] == e.target) {
                    return;
                } 
            }
        }
    }
    let expandeds = document.querySelectorAll(".filter-link");
        for (let z = 0; z < expandeds.length; z++) {
            if (expandeds[z].classList.contains("expanded")) {
                console.log("ahoj")
                expandeds[z].classList.remove("expanded");
            }
        }
});

function expand(e) {
    e.classList.toggle("expanded");
}