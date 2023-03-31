function changeClassS() {
    document.getElementById("sizeBtnS").classList.toggle('active')
    document.getElementById("sizeBtnM").classList.remove('active')
    document.getElementById("sizeBtnL").classList.remove('active')
    document.getElementById("sizeBtnXL").classList.remove('active')
    document.getElementById("sizeBtnXXL").classList.remove('active')

}

function changeClassM() {
    document.getElementById("sizeBtnS").classList.remove('active')
    document.getElementById("sizeBtnM").classList.toggle('active')
    document.getElementById("sizeBtnL").classList.remove('active')
    document.getElementById("sizeBtnXL").classList.remove('active')
    document.getElementById("sizeBtnXXL").classList.remove('active')

}

function changeClassL() {
    document.getElementById("sizeBtnS").classList.remove('active')
    document.getElementById("sizeBtnM").classList.remove('active')
    document.getElementById("sizeBtnL").classList.toggle('active')
    document.getElementById("sizeBtnXL").classList.remove('active')
    document.getElementById("sizeBtnXXL").classList.remove('active')

}

function changeClassXL() {
    document.getElementById("sizeBtnS").classList.remove('active')
    document.getElementById("sizeBtnM").classList.remove('active')
    document.getElementById("sizeBtnL").classList.remove('active')
    document.getElementById("sizeBtnXL").classList.toggle('active')
    document.getElementById("sizeBtnXXL").classList.remove('active')

}

function changeClassXXL() {
    document.getElementById("sizeBtnS").classList.remove('active')
    document.getElementById("sizeBtnM").classList.remove('active')
    document.getElementById("sizeBtnL").classList.remove('active')
    document.getElementById("sizeBtnXL").classList.remove('active')
    document.getElementById("sizeBtnXXL").classList.toggle('active')

}