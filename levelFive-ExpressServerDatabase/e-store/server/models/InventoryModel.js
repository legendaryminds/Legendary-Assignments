const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define Inventory Schema
const InventorySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
});

// Export Inventory Model
const InventoryModel = mongoose.model('Inventory', InventorySchema);
module.exports = InventoryModel