const Product = require('../models/product.model')

const getProducts = async (req, res) => {
    try {
        const product = await Product.find();
        if (!product) return res.status(404).json({ message: 'Product not found' })
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getOneProduct = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) return res.status(404).json({ message: "Product not found!" });

    res.status(200).json(product)
}

const createProduct = async (req, res) => {

    try {
        const product = await Product.create(req.body);

        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) return res.status(404).json({ message: "Product not found!" });

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) return res.status(404).json({ message: 'product not found!' })
    res.status(200).json({ message: "Product deleted successfully" })
}





module.exports = { getProducts, getOneProduct, createProduct, updateProduct, deleteProduct }