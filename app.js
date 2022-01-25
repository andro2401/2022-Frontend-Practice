const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");

menu.addEventListener('click', () => {
    nav.classList.add('open-nav') //kako bi se navigaciji dodala klasa koja je napravljena da se navigacija prikaže
})

close.addEventListener('click', () => {
    nav.classList.remove('open-nav') //kada kliknemo na close da se navigacija zatvori!
})