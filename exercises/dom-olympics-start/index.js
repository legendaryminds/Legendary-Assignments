document.getElementById("header").innerHTML=("JavaScript Made This");
// myHeader.textContent = "JavaScript Made This!!";

document.getElementById("name").innerHTML=("Cynthia");
// myName.textContent = "Cynthia";
// myName.style.color = "purple";
// myHeader.append(myName);

document.getElementById("subHeader").innerHTML=("wrote the JavaScript")
// myJava.textContent = "wrote the JavaScript!"
// myName.append(` ${myJava.textContent}`)



const leftMessage = document.getElementsByClassName("left message")
leftMessage[0].innerHTML = "I would love to share something with you!";
leftMessage[1].innerHTML = "I found my Soul Mate.";

const rightMessage = document.getElementsByClassName("right message")
rightMessage[0].innerHTML = "Oh really, do tell!";
rightMessage[1].innerHTML = "When do we get to meet?";

let myClear = document.getElementById("clear-button");
let myMessages = document.getElementById("messages");
myClear.addEventListener("click",()=> myMessages.remove())