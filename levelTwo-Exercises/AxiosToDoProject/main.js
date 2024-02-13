const todos = document.getElementById("todos");

axios
  .get("https://api.vschool.io/cynthiacarter/todo")
  .then((res) => {
    console.log(res.data);
    addToDom(res.data);
  })
  .catch((err) => console.log(err));

//create elements
function addToDom(data) {
  for (let i = 0; i < data.length; i++) {
    const div = document.createElement("div");
    const title = document.createElement("h2");
    const desc = document.createElement("p");
    const price = document.createElement("h4");
    const img = document.createElement("img");
    const checkbox = document.createElement("input");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    const titleInput = document.createElement("input");
    const descInput = document.createElement("input");
    const priceInput = document.createElement("input");
    const imgUrlInput = document.createElement("input");

    // Container for title and checkbox
    const titleCheckboxContainer = document.createElement("div");
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("todo-item-content");

    // Append Elements to Content Container
    contentContainer.append(
      title,
      desc,
      img,
      checkbox,
      price,
      deleteBtn,
      editBtn
    );
    div.append(contentContainer);
    titleCheckboxContainer.classList.add("title-checkbox-container");
    div.classList.add("todo-item");

    // Set Element Properties

    checkbox.checked = data[i].completed;
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("custom-checkbox");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");

    // Setup input fields
    priceInput.value = data[i].price || "";
    priceInput.style.display = "none";
    descInput.value = data[i].description || "";
    descInput.style.display = "none";
    titleInput.value = data[i].title || "";
    titleInput.style.display = "none";
    imgUrlInput.value = data[i].imgUrl || "";
    imgUrlInput.style.display = "none";

    // Add data to the Elements
    title.textContent = data[i].title;
    desc.textContent = data[i].description;
    price.textContent = `Price: $${data[i].price}`;
    img.src = data[i].imgUrl;
    img.setAttribute("width", "300px");

    // Apply strikethrough animation if the todo item is completed
    if (data[i].completed) {
      title.classList.add("strikethrough-animation");
    }

    // Append title and checkbox to their container
    titleCheckboxContainer.append(title, checkbox);

    // Append elements to div
    div.append(
      titleCheckboxContainer,
      titleInput,
      desc,
      descInput,
      img,
      imgUrlInput,
      price,
      priceInput,
      deleteBtn,
      editBtn
    );
    todos.append(div);

    // Delete button event listener
    deleteBtn.addEventListener("click", function () {
      const todoId = data[i]._id;
      axios
        .delete("https://api.vschool.io/cynthiacarter/todo/" + todoId)
        .then(() => div.remove())
        .catch((err) => console.log(err));
    });

    // Checkbox event listener
    checkbox.addEventListener("click", (e) => {
      const updateObj = {
        completed: e.target.checked,
      };
      axios
        .put(
          "https://api.vschool.io/cynthiacarter/todo/" + data[i]._id,
          updateObj
        )
        .then(() => {
          if (checkbox.checked) {
            title.classList.add("strikethrough-animation");
          } else {
            title.classList.remove("strikethrough-animation");
          }
        })
        .catch((err) => console.log(err));
    });

    // Edit button event listener
    editBtn.addEventListener("click", function () {
      const isEditing = editBtn.textContent === "Edit";
      [title, desc, price, img].forEach(
        (el) => (el.style.display = isEditing ? "none" : "block")
      );
      [titleInput, descInput, priceInput, imgUrlInput].forEach(
        (input) => (input.style.display = isEditing ? "block" : "none")
      );
      editBtn.textContent = isEditing ? "Save" : "Edit";

      // Todo Form Submission Handling
      if (!isEditing) {
        const updatedTodo = {
          title: titleInput.value,
          description: descInput.value,
          price: priceInput.value,
          imgUrl: imgUrlInput.value,
        };
        axios
          .put(
            `https://api.vschool.io/cynthiacarter/todo/${data[i]._id}`,
            updatedTodo
          )
          .then(() => {
            title.textContent = updatedTodo.title;
            desc.textContent = updatedTodo.description;
            price.textContent = `Price: $${updatedTodo.price}`;
            img.src = updatedTodo.imgUrl;
          })
          .catch((err) => console.log(err));
      }
    });
  }
}

// My old code:
//     editBtn.addEventListener("click", function () {
//       if (editBtn.textContent === "Edit") {
//         title.style.display = "none";
//         desc.style.display = "none";
//         price.style.display = "none";
//         img.style.display = "none";

//         titleInput.style.display = "block";
//         descInput.style.display = "block";
//         priceInput.style.display = "block";
//         imgUrlInput.style.display = "block";

//         editBtn.textContent = "Save";
//       } else {
//         const updatedTodo = {
//           title: titleInput.value,
//           description: descInput.value,
//           price: priceInput.value,
//           imgUrl: imgUrlInput.value,
//         };

//         axios
//           .put("https://api.vschool.io/cynthiacarter/todo/" + data[i]._id,
//             updatedTodo)
//           .then(() => {
//             title.textContent = titleInput.value;
//             desc.textContent = descInput.value;
//             price.textContent = `Price: $${priceInput.value}`;
//             img.src = updatedTodo.imgUrl;

//             title.style.display = "block";
//             desc.style.display = "block";
//             price.style.display = "block";
//             img.style.display = imgUrlInput.value ? "block" : "none";

//             titleInput.style.display = "none";
//             descInput.style.display = "none";
//             priceInput.style.display = "none";
//             imgUrlInput.style.display = "none";

//             editBtn.textContent = "Edit";
//           })
//           .catch((err) => console.log(err));
//       }
//     });
//   }
// }

// Todo Form Submission Handling
document.getElementById("todoForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const newTodo = {
    title: document.getElementById("titleInput").value,
    price: document.getElementById("priceInput").value,
    description: document.getElementById("descInput").value,
    imgUrl: document.getElementById("imgUrlInput").value,
  };

  // my old code:
  // document.getElementById("todoForm").addEventListener("submit", function (e) {e.preventDefault();

  //   const title = document.getElementById("titleInput").value;
  //   const price = document.getElementById("priceInput").value;
  //   const description = document.getElementById("descInput").value;
  //   const imgUrl = document.getElementById("imgUrlInput").value;

  //   const newTodo = {
  //     title: title,
  //     price: price,
  //     description: description,
  //     imgUrl: imgUrl,
  //   };

  axios
    .post("https://api.vschool.io/cynthiacarter/todo", newTodo)
    .then((res) => {
      addToDom([res.data]);
      ["titleInput", "priceInput", "descInput", "imgUrlInput"].forEach(
        (id) => (document.getElementById(id).value = "")
      );
    })
    .catch((err) => console.log(err));
});

// My old code:
//   axios
//     .post("https://api.vschool.io/cynthiacarter/todo", newTodo)
//     .then((res) => {
//       addToDom([res.data]);
//       document.getElementById("titleInput").value = "";
//       document.getElementById("priceInput").value = "";
//       document.getElementById("descInput").value = "";
//       document.getElementById("imgUrlInput").value = "";
//     })
//     .catch((err) => console.log(err));
// });

// Typing Effect on Page Load
const titleText = "Dream A Little Dream!"; //
let index = 0;

function typeEffect(element, text) {
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    setTimeout(() => typeEffect(element, text), 150); // Adjust typing speed
  }
}

window.onload = () => {
  const titleElement = document.getElementById("animated-title");
  typeEffect(titleElement, titleText);
};
