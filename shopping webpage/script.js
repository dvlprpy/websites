let slideNumber = 1;
showSlide(slideNumber);


function nextSlider(n){
    showSlide(slideNumber +=n)
}


function currentSlider(n) {
    showSlide(slideNumber = n)
}


function showSlide(n){
    let i;
    let slides = document.getElementsByClassName("public");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideNumber = 1}
    if (n < 1) {slideNumber = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideNumber-1].style.display = "block";
    dots[slideNumber-1].className += " active";
}
document.querySelector(".active").style.display = "none";



function showCategoryFunc() {
    let p = document.querySelector(".container_menu_items"); 
    p.classList.toggle("show-category")
}

window.onscroll = function () {scrollFunction()}
function scrollFunction() {
    let topPage = document.querySelector(".go-top");
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        topPage.style.display = "block"
    } else {
        topPage.style.display = "none"
    }
}
function goToTopFunc() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}