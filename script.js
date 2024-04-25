const hamburgerMenu = document.querySelector(".hamburgerMenu");
const sideNav = document.querySelector(".tabsSubContainer");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const bg = document.querySelector(".bg");
const nav = document.querySelector("nav");
const images = document.querySelectorAll(".gallery img");
const categories = document.querySelectorAll(".cardContainer");
const body = document.querySelector("body");
let touchStart;
let touchEnd;
let currentPosition;
let oldPosition;


hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active")
    sideNav.classList.toggle("active")
    body.classList.toggle("active")
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
        body.classList.remove("active")

    }
});

window.addEventListener("scroll", () => {
    currentPosition = window.scrollY;
    if (currentPosition <= 5 || currentPosition < oldPosition) {
        nav.style.transform="translateY(0%)";
    }
    else {
        nav.style.transform="translateY(-100%)";
    }

    oldPosition = currentPosition <= 0 ? 0 : currentPosition;
})


images.forEach(img => {

    img.addEventListener("click", () => {

        bg.classList.add("active");
        currentId = img.dataset.index;

        let newImg = document.createElement('img');
        newImg.src = img.attributes.src.value;
        newImg.alt = "Image of the hive group"
        newImg.classList.add("fullSizeImage")
        bg.append(newImg)

        nav.style.transform="translateY(-100%)";
        body.style.overflowY = "hidden";

    })
})

bg && bg.addEventListener("click", (e) => {

    if (e.target.classList.contains('bg') || e.target.classList.contains('close')) {
        bg.classList.remove('active');
        document.querySelector(".fullSizeImage").remove();
        body.style.overflowY = "scroll";

        if (window.scrollY === 0) {
            nav.style.transform="translateY(0%)";
        }
    }

})

categories.forEach(category => {

    category.addEventListener("click", () => {

        images.forEach(img => {
            if (!img.dataset.index.includes(category.dataset.index)) {
                img.style.display = "none";
                console.log("if ==>", img.dataset.index);
                console.log("if ==>", category.dataset.index);
            }
            else {
                img.style.display = "block";
                console.log("else ==>", img.dataset.index);
                console.log("else ==>", category.dataset.index);
            }
        })

    })
})