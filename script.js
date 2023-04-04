
let navlink = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse")
navlink.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show")
        navCollapse.classList.toggle("navbar-toggler collapsed")

    })
})


// For active on scroll
const li=document.querySelectorAll(".nav-link")
const sec=document.querySelectorAll("section")

function activeMenu(){
    let len=sec.length;
    while(--len && window.scrollY+ 97 < sec[len].offsetTop){}
        li.forEach(line => line.classList.remove("active"));
        li[len].classList.add("active");
    
}

activeMenu();
window.addEventListener("scroll", activeMenu)

