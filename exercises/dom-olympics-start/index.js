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
myClear.addEventListener("click", () => myMessages.remove())

// Your existing code...

// Function to change message colors
function changeMessageColors(color) {
  const leftMessages = document.getElementsByClassName("left message");
  const rightMessages = document.getElementsByClassName("right message");

  // Change color of left messages
  for (let message of leftMessages) {
    message.style.color = color;
  }

  // Change color of right messages
  for (let message of rightMessages) {
    message.style.color = color;
  }
}

// Event listener for dropdown change
document.getElementById("theme-drop-down").addEventListener("change", function() {
  const selectedColor = this.value;

  // Change message colors based on the selected color
  switch (selectedColor) {
    case "purple":
      changeMessageColors("purple");
      break;
    case "green":
      changeMessageColors("green");
      break;
    case "default":
      // Set the default color for messages here if needed
      changeMessageColors(""); // You can set the default color or remove the style to reset to default
      break;
    default:
      changeMessageColors(""); // Handle any other cases for default behavior
  }
});


// document.getElementById("theme-drop-down").onclick = function () {
//   if (
//     document.body.style.backgroundColor === "" ||
//     document.body.style.backgroundColor === "rgb(0, 0, 0)"
//   ) {
//     document.body.style.backgroundColor = "#f5deb3";
//     document.getElementsByTagName("a")[0].style.color = "#000";
//     document.getElementsByTagName("a")[0].style.borderColor = "#000";
//   } else if (document.body.style.backgroundColor === "rgb(245, 222, 179)") {
//     document.body.style.backgroundColor = "#000";
//     document.getElementsByTagName("a")[0].style.color = "#f5deb3";
//     document.getElementsByTagName("a")[0].style.borderColor = "#f5deb3";
//   }
// };