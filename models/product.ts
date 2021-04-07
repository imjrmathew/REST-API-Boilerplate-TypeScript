import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
    productname: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const productSchema = mongoose.model('Product', ProductSchema);
module.exports = { Product: productSchema };