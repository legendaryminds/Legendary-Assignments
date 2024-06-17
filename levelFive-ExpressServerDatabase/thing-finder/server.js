const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();
const port = 7799

app.use(express.json());

const inventories = [
  {
    name: "banana",
    type: "food",
    price: 200,
    id: uuidv4(),
  },
  {
    name: "pants",
    type: "clothing",
    price: 2500,
    id: uuidv4(),
  },
  {
    name: "basket ball",
    type: "toy",
    price: 1000,
    id: uuidv4(),
  },
  {
    name: "rockem sockem robots",
    type: "toy",
    price: 1500,
    id: uuidv4(),
  },
  {
    name: "shirt",
    type: "clothing",
    price: 800,
    id: uuidv4(),
  },
  {
    name: "soup",
    type: "food",
    price: 300,
    id: uuidv4(),
  },
  {
    name: "flour",
    type: "food",
    price: 100,
  },
];

// GET with filtering
app.get("/inventory", (req, res) => {
  const { type, minPrice = 0, maxPrice = 1000000 } = req.query;

  let filteredItems = inventories;

  if (type) {
    filteredItems = filteredItems.filter(inventory => inventory.type === type);
  }

  filteredItems = filteredItems.filter(inventory => 
    inventory.price >= minPrice && inventory.price <= maxPrice
  );

  res.json(filteredItems);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

