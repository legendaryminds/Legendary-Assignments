// axios
//   .get("https://api.vschool.io/cynthiacarter/todo")

  // .then(response => {
  //     for (let i = 0; i < response.data.length; i++){
  //         const h1 = document.createElement("h1");
  //         h1.textContent = response.data[i].title;
  //         document.body.appendChild(h1);
  //     }
  // })
  axios
    .get("https://api.vschool.io/cynthiacarter/todo")
    .then((response) => {
      response.data.forEach((todo) => {
        createTodo(todo);
      });
    })
    .catch((error) => console.log(error));

  function createTodo(todo) {
    const todoElement = document.createElement("div");

    const title = document.createElement("h1");
    title.textContent = todo.title;
    if (todo.completed) {
      title.style.textDecoration = "line-through";
    }
    todoElement.appendChild(title);

    if (todo.imgUrl) {
      const image = document.createElement("img");
      image.src = todo.imgUrl;
      image.style.width = "100px"; // Set a fixed width or a max-width as needed
      todoElement.appendChild(image);
    }

    document.body.appendChild(todoElement);
  }

        // // Test Axios request
        // axios.get("https://jsonplaceholder.typicode.com/posts/1")
        //     .then(response => {
        //         console.log("Test Axios Request Success:", response);
        //     })
        //     .catch(error => {
        //         console.log("Test Axios Request Error:", error);
        //     });
    