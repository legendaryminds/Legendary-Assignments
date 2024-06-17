const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();
const PORT = 3000;

app.use(express.json());

const todos = [
  {
    _id: uuidv4(),
    name: "Buy groceries",
    description: "Milk, Bread, Cheese, Eggs, and Vegetables",
    imageUrl: "http://example.com/groceries.jpg",
    completed: false,
  },
  {
    _id: uuidv4(),
    name: "Walk the dog",
    description: "Take Max for a 30-minute walk in the park",
    imageUrl: "http://example.com/dog.jpg",
    completed: true,
  },
  {
    _id: uuidv4(),
    name: "Read a book",
    description: 'Finish reading "The Great Gatsby"',
    imageUrl: "http://example.com/book.jpg",
    completed: false,
  },
];

// GET All
app.get('/todos', (req, res) => {
    res.json(todos);
})


// GET Single by Id
app.get("/todos/:id", (req, res) => {
  const todo = todos.find((todo) => todo._id === req.params.id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

// POST add new
app.post("/todos", (req, res) => {
  const { name, description, imageUrl, completed } = req.body;
  const newTodo = {
    _id: uuidv4(),
    name,
    description,
    imageUrl,
    completed: completed || false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});


// PUT Update
app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { name, description, imageUrl, completed } = req.body;
  const todo = todos.find((todo) => todo._id === id);
  if (todo) {
    todo.name = name || todo.name;
    todo.description = description || todo.description;
    todo.imageUrl = imageUrl || todo.imageUrl;
    todo.completed = completed !== undefined ? completed : todo.completed;
    res.json(todo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

// DELETE
app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex((todo) => todo._id === id);
  if (index !== -1) {
    const deletedTodo = todos.splice(index, 1);
    res.json(deletedTodo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
