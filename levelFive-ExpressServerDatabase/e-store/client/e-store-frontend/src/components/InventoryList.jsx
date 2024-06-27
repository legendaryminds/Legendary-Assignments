import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InventoryList = () => {
  // State for storing items
  const [items, setItems] = useState([]);

  // State for storing new item details
  const [newItem, setNewItem] = useState({
    name: '',
    description: '',
    quantity: '',
    price: ''
  });

  // Fetch items when the component mounts
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('/api/inventory');
      // Fetch items when the component mounts
      setItems(response.data);
    } catch (err) {
      console.error('Error fetching inventory:', err);
    }
  };

  const handleInputChange = (e) => {
    // Getting name and value of the input field
    const { name, value } = e.target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: value
    }));
  };

  const addItem = async (e) => {
    e.preventDefault();
    try {
      // Making POST request to add new item
      const response = await axios.post('/api/inventory', newItem);
      // Adding new item to items state
      setItems((prevItems) => [...prevItems, response.data]);
      // Resetting newItem state
      setNewItem({ name: '', description: '', quantity: '', price: '' });
    } catch (err) {
      console.error('Error adding item:', err);
    }
  };

  const deleteItem = async (id) => {
    try {
      // Making DELETE request to delete item by ID
      await axios.delete(`/api/inventory/${id}`);
      // Removing deleted item from items state
      setItems((prevItems) => prevItems.filter((item) => item._id !== id));
    } catch (err) {
      console.error('Error deleting item:', err);
    }
  };

  return (
    <div>
      <h1>e-Store Inventory</h1>
      <form onSubmit={addItem}>
        <input
          type="text"
          name="name"
          value={newItem.name}
          onChange={handleInputChange}
          placeholder="Item Name"
          required
        />
        <input
          type="text"
          name="description"
          value={newItem.description}
          onChange={handleInputChange}
          placeholder="Description"
        />
        <input
          type="number"
          name="quantity"
          value={newItem.quantity}
          onChange={handleInputChange}
          placeholder="Quantity"
          required
        />
        <input
          type="number"
          name="price"
          value={newItem.price}
          onChange={handleInputChange}
          placeholder="Price"
          required
        />
        <button type="submit">Add Item</button>
      </form>
      <div>
        {items.map((item) => (
          <div key={item._id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
            <button onClick={() => deleteItem(item._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryList;
