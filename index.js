//accepting user input
// let username = window.prompt("what is your name?");
// console.log(username);

const background = ["../Kamran6433.github.io/Images/NCLCampus2.jpg",
    "../Kamran6433.github.io/Images/NCLCampus.jpg",
    "../Kamran6433.github.io/Images/Catalyst.jpg"];
let i = 0;

function changeImg() {
    document.slide.src = background[i];

    if (i < background.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
    setTimeout("changeImg()", 5000);
}
window.onload = changeImg;

const aosElements = Array.from(document.querySelectorAll('.aos'));
console.log(aosElements);

window.addEventListener('scroll', throttle(scanElements, 50))

function scanElements(e) {
    console.count(e);
    aosElements.forEach(element => {
        if(isVisible(element)) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    })
}

function isVisible(element) {
    const elementDiv = element.getBoundingClientRect();
    let distanceFromTop = -250;
    return elementDiv.top - window.innerHeight < distanceFromTop;
}

function throttle(fn, delay) {
    let lastCall = 0;
    return (...args) => {
        let context = this;
        let current = new Date().getTime();
        if (current - lastCall < delay) {
            return
        }
        lastCall = current;
        return fn.apply(context, ...args);
    }
}

const committeeCarousel = [document.getElementsByClassName("committee")];
// console.log(committeeCarousel);

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 100000000000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});