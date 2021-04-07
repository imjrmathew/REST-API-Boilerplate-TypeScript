import express from 'express';
const router = express.Router();

const { Product } = require('../models/product')

// POST endpoint
router.post('/product', async (req, res) => {
    const productobj = new Product({
        productname: req.body.productname,
        price: req.body.price,
        quantity: req.body.quantity
    });
    try {
        await productobj.save();
        res.status(200).json(productobj);
    } catch (err) {
        res.status(400).json({ error: err });
    }
});

// GET ALL endpoint
router.get('/products', async (req, res) => {
    const productsData: [] = await Product.find({});
    try {
        res.status(200).json(productsData);
    } catch (err) {
        res.status(400).json({ error: err });
    }
});

// GET Individual endpoint
router.get('/product/:id', async (req, res) => {
    const productData: object = await Product.findById({ _id: req.params.id });
    try {
        res.status(200).json(productData);
    } catch (err) {
        res.status(400).json({ error: err });
    }
});

// DELETE endpoint
router.delete('/product/:id', async (req, res) => {
    const product: object = await Product.findByIdAndRemove({ _id: req.params.id });
    try {
        res.status(200).json({ message: "Product removed!" });
    } catch (err) {
        res.status(400).json({ error: err });
    }
});

// PATCH endpoint
router.patch('/product/:id', async (req, res) => {
    const product: object = await Product.findByIdAndUpdate({ _id: req.params.id }, req.body);
    try {
        const updatedData: object = await Product.findById({_id: req.params.id});
        res.status(200).json(updatedData);
    } catch (err) {
        res.status(400).json({ error: err });
    }
});

module.exports = router;