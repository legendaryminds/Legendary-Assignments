const myGreeting = document.getElementById("greeting");
// console.log(myGreeting);
myGreeting.innerText = "What's up, Doc!"
const paragraph = document.createElement("p")
paragraph.innerText = "Love melts the ice."
myGreeting.appendChild(paragraph)
// const myHobbies = document.getElementById("favHobbies")
// console.log (myHobbies)
// var myHobbies = document.getElementsByClassName("hobbies")
// for (var i = 0; i < myHobbies.length; i++){
//     console.log (myHobbies[1].innerHTML)
// }
// var result = document.querySelectorAll("ol#favHobbies > li")
// console.log(Array.from(result))
// for (var i = 0; i < result.length; i++) {
//     result[i].textContent = "Redacted"
// }
document.getElementById("this-div")
    .addEventListener("click", function (){
    console.log("You licked me!");
})