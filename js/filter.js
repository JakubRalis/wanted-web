const products = document.querySelectorAll(".products-box-link")
const productsBox = document.getElementById("products")

const black = document.getElementById("colorBlack");
const grey = document.getElementById("colorGrey");
const white = document.getElementById("colorWhite");
const normal = document.getElementById("typeNormal");
const zip = document.getElementById("typeZip");
const onsale = document.getElementById("saleOnSale");

const blacks = document.querySelectorAll(".black");
const greys = document.querySelectorAll(".grey");
const whites = document.querySelectorAll(".white");
const normals = document.querySelectorAll(".normal");
const zips = document.querySelectorAll(".zip");
const onsales = document.querySelectorAll(".onsale");
const checkeds = document.querySelectorAll(".checked")


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
    let lastAdded = checkedElements[checkedElements.length - 1]
    let lastAddeds = document.querySelectorAll("." + lastAdded)
    let requiredCounter = checkedElements.length - (colorFilter.length - (colorFilter.length - 1)) - (typeFilter.length - (typeFilter.length - 1))
    console.log(requiredCounter)

    for (const product of products) {
        let counter = 0
        for (const classPart of product.classList) {
            if (classPart != "products-box-link" && checkedElements.includes(classPart)) {
                counter += 1
            }
        }
        if (counter == requiredCounter)  {
            product.classList.add("filtered")
        }
        else {
            product.classList.remove("filtered")
        }




        
        // NENÍ ZAŠKRTNUTÝ ANI JEDEN FILTER
        if (checkedElements.length < 1) {
            product.classList.remove("filtered")
        }


        
        // ŽÁDNÝ PRODUKT NESPLŇUJE POŽADAVKY
        let filtered = document.querySelectorAll(".filtered")
        if (checkedElements.length > 0 && filtered.length < 1) {
            productsBox.classList.add("empty")
        }
        if (productsBox.classList.contains("empty") && filtered.length > 0 || productsBox.classList.contains("empty") && checkedElements.length < 1) {
            productsBox.classList.remove("empty")
        }
    }
    
}

    /*
    for (const product of products) {
        for (const element of checkedElements) {
            if (!product.classList.contains(element)) {
                if (colorFilter.length > 1 || typeFilter.length > 1) {
                    for (let elm of lastAddeds) {
                        if (elm != element) {
                            product.classList.remove("filtered")
                            break
                        }
                    }
                    product.classList.add("filtered")
                }
            }
            else {
                product.classList.add("filtered")
            }
        }
        




        // NENÍ ZAŠKRTNUTÝ ANI JEDEN FILTER
        if (checkedElements.length < 1) {
            product.classList.remove("filtered")
        }


        
        // ŽÁDNÝ PRODUKT NESPLŇUJE POŽADAVKY
        let filtered = document.querySelectorAll(".filtered")
        if (checkedElements.length > 0 && filtered.length < 1) {
            productsBox.classList.add("empty")
        }
        if (productsBox.classList.contains("empty") && filtered.length > 0 || productsBox.classList.contains("empty") && checkedElements.length < 1) {
            productsBox.classList.remove("empty")
        }
    }    
}
*/