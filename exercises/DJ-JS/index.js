// const square = document.getElementsByClassName("square");
// square.addEventListner("mouseover", function handleMouseOver() {
//     square.style.color = "red";
// });

const square = document.getElementById("square");

square.addEventListener("mouseover", function() {
  square.style.backgroundColor = "blue";
});

square.addEventListener("mouseout", function() {
  square.style.backgroundColor = "yellow";
});

square.addEventListener("mousedown", function() {
  square.style.backgroundColor = "red";
});

document.addEventListener("keyup", function() {
  square.style.backgroundColor = "pink";
});

square.addEventListener("dblclick", function () {
  square.style.backgroundColor = "green";
});

// square.addEventListener("scroll", function () {
//   square.style.backgroundColor = "orange";
// });

document.addEventListener("wheel", function () {
  square.style.backgroundColor = "purple";
});
console.log("Hi")