// VdaceqkAMdSm2nJx;
mongodb+srv://legendaryminds:VdaceqkAMdSm2nJx@legendarycluster0.jss56ro.mongodb.net/
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const app = express()


app.use(exprss.json())

app.use(morgan('dev'))

mongoose.connect('')

mongoose.connect('mongodb+srv://jordanburger:helloworld@cluster0.zrmjrwz.mongodb.net/')'