const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extends: false }))

app.use('/api/products', productRoute)

mongoose.connect('mongodb://localhost:27017').then(() => {
    console.log("Database is connected")
    app.listen(3000, () => {
        console.log("Server is running on port 3000")
    });
}).catch((error) => console.log(error.message))