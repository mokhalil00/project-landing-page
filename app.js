const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.navlinks');

hamburger.addEventListener('click' , ()=> {
    hamburger.classList.toggle('open');
    navlinks.classList.toggle('activ');
})