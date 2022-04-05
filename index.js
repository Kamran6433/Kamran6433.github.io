

let name = "Kamran"; //string
let gay = false; //boolean
let number = 67; //number

//accepting user input
// let username = window.prompt("what is your name?");
// console.log(username);


let instagramAccount;
let firstName;
let lastName;
let studentID;
document.getElementById("submit").onclick = function () {
    instagramAccount = document.getElementById("instagram_account").value;
    firstName = document.getElementById("first_name").value;
    lastName = document.getElementById("last_name").value;
    studentID = document.getElementById("student_id").value;
}
console.log(instagramAccount, firstName, lastName, studentID);



