let todos = [];
// let retrievedTodos = [];

// First check local storage on page load
function checkStorage() {
  const cookie = localStorage.getItem("monster")

  if (!cookie) { return }
  
  console.log("cookie monster", cookie)
  // Generate our todos from the local todos
  const infoFromCookie = JSON.parse(cookie)
  console.log('infoFromCookie', infoFromCookie)

  for (var i = 0; i < infoFromCookie.length; i++) {
    todos.push(infoFromCookie[i])
  }
    
  // Create a list from retrievedTodos
  createTodos()
}

function displayDate() {
  let date = new Date();
  date = date.toString().split(" ");
  document.querySelector("#date").innerHTML =
    date[1] + " " + date[2] + " " + date[3];
}

window.onload = function () {
  displayDate();
};
// Function to create todos from the todos array
function createTodos() {
  let creation = document.getElementById("list");
  console.log("creation", creation)

  // Create html elements so they can be added

  // Add them to #list


  for (var i = 0; i < todos.length; i++) {
    let listElement = document.createElement('li')
    listElement.innerText = todos[i]
    creation.appendChild(listElement)
  }
  // for each todo create the same elements as below
    // value for each todo = todo[i]
}

// Get todos function
function getTodos() {
  let newTodos = document.querySelectorAll(".todo");
  console.log("newTodos", newTodos)

  for (var i = 0; i < newTodos.length; i++){ 
    todos.push(newTodos[i].textContent);
  }

  localStorage.setItem('monster', JSON.stringify(todos));
  location.reload

  return newTodos
}

const addInput = document.querySelector("#title");
const addBtn = document.querySelector("#addBtn");
let listItems = document.querySelectorAll(".list-item");

addBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const ul = document.getElementById("list");
  const li = document.createElement("li");
  const item = document.createElement("div");

  item.classList.add("todo")

  item.innerHTML = addInput.value;
  let initialValue = addInput.value;
  console.log(addInput.value);
  addInput.value = "";


  // const editBtn = document.createElement("button");
  // editBtn.innerHTML = "edit";
  // editBtn.addEventListener("click", () => {
  //   const input = document.createElement("input");
  //   li.replaceChild(input, item);

  //   const save = document.createElement("button");
  //   save.innerHTML = "save";
  //   save.addEventListener("click", () => {
  //     const newDiv = document.createElement("div")
  //     newDiv.innerHTML = input.value;
  //     li.replaceChild(newDiv, input);

  //   })
  //   li.replaceChild(save, editBtn);

  //   const newEditBtn = document.createElement("button");
  //   newEditBtn.innerHTML = "edit";
  //   newEditBtn.addEventListener("click", () => {
  //     const input = document.createElement("input");
  //   })

  // })

  const editInput = document.createElement("input");
  editInput.style.display = 'none';
  editInput.value = initialValue;


  const save = document.createElement("button");
  save.innerHTML = "save";
  save.style.display = 'none';
  save.addEventListener("click", () => {
    console.log("It's Saved")
    item.innerHTML = editInput.value;
    console.log("Log This", addInput.value)
    // Show the edit button, the addInput.value and save button
    editBtn.style.display = "block";
    save.style.display = "none";
    editInput.style.display = "none";

    getTodos();
  });

  const editBtn = document.createElement("button");
  editBtn.innerHTML = "edit";
  editBtn.addEventListener("click", () => {
    // show the input
    editInput.style.display = 'block';
    save.style.display = 'block';
    editBtn.style.display = "none";

    // const input = document.createElement("input");
    // li.replaceChild(input, item);
    // const save = document.createElement("button");
    // save.innerHTML = "save";
    // save.addEventListener("click", () => {
    //   const newDiv = document.createElement("div");
    //   newDiv.innerHTML = input.value;
    //   li.replaceChild(newDiv, input);
    // });
    // li.replaceChild(save, editBtn);
    // const newEditBtn = document.createElement("button");
    // newEditBtn.innerHTML = "edit";
    // newEditBtn.addEventListener("click", () => {
    //   const input = document.createElement("input");
    // });
  });

  const xBtn = document.createElement("button");
  xBtn.innerHTML = "X";
  xBtn.addEventListener("click", (event) => {
    console.log("delete clicked");
    li.remove();
    getTodos();
  });

  // let containerElement = document.querySelector("#container");
  // containerElement.appendChild(xBtn);

  li.appendChild(editInput);
  li.appendChild(item);
  li.appendChild(editBtn);
  li.appendChild(save)
  li.appendChild(xBtn);
  ul.appendChild(li);

  getTodos();
});



  
  



/* 
Solution 1
- name or add classes to each todo item
- once clicked access the textContent of elemtn using parentNode

Solution 2
- set you todos in a global arr (like let arr = [])
- run a display function that builds a new list

Notes
- Think about having a function that runs on each change to list. 
  - You'll be able to update the edited and deleted items  
- Array methods Array.filter() .map() .sort() 
- Accessing html with javascript
*/
