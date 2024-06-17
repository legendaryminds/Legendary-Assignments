// VdaceqkAMdSm2nJx;
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();

app.use(express.json());

app.use(morgan("dev"));

mongoose.set("strictQuery", true);

mongoose.connect(
    "mongodb+srv://legendaryminds:VdaceqkAMdSm2nJx@legendarycluster0.jss56ro.mongodb.net/", (err) => {
       console.log('Connected to db', err) 
});

app.use('/inventory', require('./routes/inventoryRouter'));
  
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(8000, () => {
   console.log('Server is running on port 8000') 
})
