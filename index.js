//accepting user input
// let username = window.prompt("what is your name?");
// console.log(username);

var background = ["../Kamran6433.github.io/Images/NCLCampus2.jpg",
    "../Kamran6433.github.io/Images/NCLCampus.jpg",
    "../Kamran6433.github.io/Images/Catalyst.jpg"];
var i = 0;

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

var aosElements = Array.from(document.querySelectorAll('.aos'));
console.log(aosElements);

window.addEventListener('scroll', throttle(scanElements, 50))

function scanElements(e) {
    console.count(e);
    aosElements.forEach(element => {
        if(isVisable(element)) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    })
}

function isVisable(element) {
    const elementDiv = element.getBoundingClientRect();
    let distanceFromTop = -100;
    return elementDiv.top - window.innerHeight < distanceFromTop ? true : false;
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

// let instagramAccount;
// let firstName;
// let lastName;
// let studentID;
// document.getElementById("submit").onclick = function () {
//     instagramAccount = document.getElementById("instagram_account").value;
//     firstName = document.getElementById("first_name").value;
//     lastName = document.getElementById("last_name").value;
//     studentID = document.getElementById("student_id").value;
// }
// console.log(instagramAccount, firstName, lastName, studentID);



