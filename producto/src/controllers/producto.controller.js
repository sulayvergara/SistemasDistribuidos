const Product= require('../models/producto.model');

const registerProduct = async (req, res) => {
    try {
        const { nombre, descripcion, precio, stock } = req.body;
        const newProduct = new Product({ nombre, descripcion, precio, stock });
        await newProduct.save();
        res.status(201).json({ message: 'Producto registrado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar producto', error: error.message });
    }
};

const getProduct = async (req, res) => {
    try {
        const productos = await Product.find();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener productos', error: error.message });
    }
};

module.exports = { registerProduct, getProduct };
