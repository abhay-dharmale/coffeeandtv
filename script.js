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


const floatingImages = () =>{
    let section = document.querySelector(".max-cont")
    section.addEventListener("mousemove", function(details){
        document.querySelectorAll(".image").forEach((elem)=>{
            const position = elem.getAttribute("value")
    
            var x = (window.innerWidth + details.clientX * position)/150
            var y = (window.innerHeight + details.clientY * position)/150
    
            // elem.style.transform = `translateX(${x}px) translateY(${y}px)`
            gsap.to(elem, {
                x: x,
                y: y,
                // duration: 0.01,
                ease: "power4.out"
            })
        })
    })
}
floatingImages()