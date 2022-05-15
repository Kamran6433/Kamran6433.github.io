const background = document.querySelectorAll(".image");
let i = 0;
// myFunction();
// function myFunction() {
//     document.getElementById("NUPS").innerHTML = "NUPS";
// }
// if (innerWidth < 600) {
//     document.getElementsByClassName("NUPS").innerHTML = "NUPS";
// }
function changeImg() {
    background[i].classList.remove("showing");
    i++;

    if (i > background.length - 1) {
        i = 0;
    }

    background[i].classList.add("showing");
    setTimeout("changeImg()", 5000);
}
window.onload = changeImg;

var slides = document.querySelectorAll('.containSlider');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

//Javascript for the image slider manual navigation
var manualNav = function (manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});

//JavaScript for image slider autoplay navigation
var repeat = function(activeClass) {
    let active = document.getElementsByClassName('active');
    let i =1;

    var repeater = () => {
        setTimeout(function() {
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });


            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if(slides.length === i) {
                i = 0;
            }
            if(i >= slides.length) {
                return;
            }
            repeater();
        }, 4000);
    }
    repeater();
}
repeat();

const aosElements = Array.from(document.querySelectorAll('.aos'));

window.addEventListener('scroll', throttle(scanElements, 50))

function scanElements(e) {
    console.count(e);
    aosElements.forEach(element => {
        if(isVisible(element)) {
            element.classList.add('acts');
        } else {
            element.classList.remove('acts');
        }
    })
}

function isVisible(element) {
    const elementDiv = element.getBoundingClientRect();
    let distanceFromTop = 50;
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

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 70,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
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

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.act');
    modals.forEach(modal => {
        closeModal(modal);
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('act');
    overlay.classList.add('act');
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('act');
    overlay.classList.remove('act');
}

setTimeout(function () {
    document.getElementById('notification').classList.remove('hide');
}, 0)