let nav = document.querySelector('.nav')
let navbar = document.querySelector('#nav')
let text = document.querySelector('.text')
let texts = document.getElementsByClassName('nav-item')
addEventListener("scroll", (sticknav) =>{});

onscroll = (sticknav) =>{
    if(navbar.style.display = "active"){
        navbar.style.position = "sticky"
        navbar.style.top = "0px"
        navbar.style.backgroundColor = "white"
        navbar.style.color = "black"
        navbar.style.height = "70px"
    }
};