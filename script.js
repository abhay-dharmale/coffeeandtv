let menubtn = document.getElementById('menu-btn');
let close = document.querySelector('.close-icon');
let menu = document.getElementById('menu');
let subtext = document.querySelectorAll('.sub-text');

function runmenu() {
    gsap.set(subtext, { y: 100, opacity: 0 });

    gsap.to(menu, {
        height: 'auto',
        duration: 1.2,
        ease: "power4.inOut",
    });

    gsap.to(subtext, {
        y: 0,
        duration: 1.2,
        ease: "power4.inOut",
        opacity: 1,
    });
}

function closebtn() {
    gsap.to(menu, {
        height: 0,
        duration: 1.2,
        ease: "power4.inOut",
    });

    gsap.to(subtext, {
        y: 100,
        duration: 1.2,
        ease: "power4.inOut",
        opacity: 0,
    });
}

menubtn.addEventListener('click', runmenu);
close.addEventListener('click', closebtn);
