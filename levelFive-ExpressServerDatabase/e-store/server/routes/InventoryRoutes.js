const express = require('express')
const router = express.Router()
const Inventory = require('../models/InventoryModel')

// GET all items
router.get('/', async (req, res) => {
    try {
        const items = await Inventory.find();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET one item
router.get('/:id', async (req, res) => {
    try {
        const item = await Inventory.findById(req.params.id);
        if (item == null) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(item);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

// CREATE new item
router.post('/', async (req, res) => {
    const item = new Inventory({
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price
    });

    try {
        const newItem = await item.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

// UPDATE an item
router.put('/:id', async (req, res) => {
    try {
        const undatedItem = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedItem == null) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(updatedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

router.delete("/:id", async (req, res) => {
  try {
    const item = await Inventory.findByIdAndDelete(req.params.id);
    if (item == null) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json({ message: "Item deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router