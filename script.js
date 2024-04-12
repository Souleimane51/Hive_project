const hamburgerMenu = document.querySelector(".hamburgerMenu");
const sideNav = document.querySelector(".tabsSubContainer")
let touchStart;
let touchEnd;

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active")
    sideNav.classList.toggle("active")
    document.querySelector("body").classList.toggle("active")
})

// Close sideNav with swiping
sideNav.addEventListener('touchstart', e => {
    touchStart = e.targetTouches[0].clientX;
});

window.addEventListener('touchmove', e => {
    touchEnd = e.targetTouches[0].clientX;
});

sideNav.addEventListener('touchend', () => {
    if (touchStart - touchEnd > 100) {
        sideNav.classList.remove('active');
        hamburgerMenu.classList.remove('active');
        document.querySelector("body").classList.remove("active")

    }
});