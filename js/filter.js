let products = document.querySelectorAll(".products-box-link")

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
let checkeds = document.querySelectorAll(".checked")


const checkedElements = [];
const colorFilter = [];
const typeFilter = [];

black.addEventListener("click", function () {
    black.classList.toggle("checked");
    if (!checkedElements.includes("black")) {
        checkedElements.push("black")
    }
    else {
        for (let i = 0; i < checkedElements.length; i++) {
            if (checkedElements[i] == "black") {
                checkedElements.splice(i, 1)
            }
        }
    }
    if (!colorFilter.includes("black")) {
        colorFilter.push("black")
    }
    else {
        for (let i = 0; i < colorFilter.length; i++) {
            if (colorFilter[i] == "black") {
                colorFilter.splice(i, 1)
            }
        }
    }
    filter();
})

grey.addEventListener("click", function () {
    grey.classList.toggle("checked");
    if (!checkedElements.includes("grey")) {
        checkedElements.push("grey")
    }
    else {
        for (let i = 0; i < checkedElements.length; i++) {
            if (checkedElements[i] == "grey") {
                checkedElements.splice(i, 1)
            }
        }
    }
    if (!colorFilter.includes("grey")) {
        colorFilter.push("grey")
    }
    else {
        for (let i = 0; i < colorFilter.length; i++) {
            if (colorFilter[i] == "grey") {
                colorFilter.splice(i, 1)
            }
        }
    }
    filter();
})

white.addEventListener("click", function () {
    white.classList.toggle("checked");
    if (!checkedElements.includes("white")) {
        checkedElements.push("white")
    }
    else {
        for (let i = 0; i < checkedElements.length; i++) {
            if (checkedElements[i] == "white") {
                checkedElements.splice(i, 1)
            }
        }
    }
    if (!colorFilter.includes("white")) {
        colorFilter.push("white")
    }
    else {
        for (let i = 0; i < colorFilter.length; i++) {
            if (colorFilter[i] == "white") {
                colorFilter.splice(i, 1)
            }
        }
    }
    filter();
})

normal.addEventListener("click", function () {
    normal.classList.toggle("checked");
    if (!checkedElements.includes("normal")) {
        checkedElements.push("normal")
    }
    else {
        for (let i = 0; i < checkedElements.length; i++) {
            if (checkedElements[i] == "normal") {
                checkedElements.splice(i, 1)
            }
        }
    }
    if (!typeFilter.includes("normal")) {
        typeFilter.push("normal")
    }
    else {
        for (let i = 0; i < typeFilter.length; i++) {
            if (typeFilter[i] == "normal") {
                typeFilter.splice(i, 1)
            }
        }
    }
    filter();
})

zip.addEventListener("click", function () {
    zip.classList.toggle("checked");
    if (!checkedElements.includes("zip")) {
        checkedElements.push("zip")
    }
    else {
        for (let i = 0; i < checkedElements.length; i++) {
            if (checkedElements[i] == "zip") {
                checkedElements.splice(i, 1)
            }
        }
    }
    if (!typeFilter.includes("zip")) {
        typeFilter.push("zip")
    }
    else {
        for (let i = 0; i < typeFilter.length; i++) {
            if (typeFilter[i] == "zip") {
                typeFilter.splice(i, 1)
            }
        }
    }
    filter();
})

onsale.addEventListener("click", function () {
    onsale.classList.toggle("checked");
    if (!checkedElements.includes("onsale")) {
        checkedElements.push("onsale")
    }
    else {
        for (let i = 0; i < checkedElements.length; i++) {
            if (checkedElements[i] == "onsale") {
                checkedElements.splice(i, 1)
            }
        }
    }
    filter();
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
                expandeds[z].classList.remove("expanded");
            }
        }
});

function expand(e) {
    e.classList.toggle("expanded");
}

function filter() {
    console.log("c: " + colorFilter)
    console.log("t: " + typeFilter)
    console.log("ce: " + checkedElements)
    for (const product of products) {
        for (const element of checkedElements) {
            if (!product.classList.contains(element)) {
                product.classList.remove("filtered")
                break
            }
            product.classList.add("filtered")
        }
        if (checkedElements.length < 1) {
            product.classList.remove("filtered")
        }
    }
}