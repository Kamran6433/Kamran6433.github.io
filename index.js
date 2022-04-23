// accepting user input
// let username = window.prompt("what is your name?");
// console.log("username");

window.onload = () => {
    document.getElementById("close-button").onclick = function() {
        this.parentNode.remove();
        return false;
    }
}

const background = document.querySelectorAll(".image");
let i = 0;

function changeImg() {
    background[i].classList.remove("showing");
    i++;

    if (i > background.length - 1) {
        i = 0;
    }

    background[i].classList.add("showing");
    setTimeout("changeImg()", 5000);
}
// setTimeout("changeImg()", 5000);
window.onload = changeImg;

const aosElements = Array.from(document.querySelectorAll('.aos'));

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

const committeeCarousel = [document.getElementsByClassName("committee")];

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