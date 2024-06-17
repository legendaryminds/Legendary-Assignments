import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InventoryList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: '',
    description: '',
    quantity: '',
    price: ''
  });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('/api/inventory');
      setItems(response.data);
    } catch (err) {
      console.error('Error fetching inventory:', err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: value
    }));
  };

  const addItem = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/inventory', newItem);
      setItems((prevItems) => [...prevItems, response.data]);
      setNewItem({ name: '', description: '', quantity: '', price: '' });
    } catch (err) {
      console.error('Error adding item:', err);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`/api/inventory/${id}`);
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
