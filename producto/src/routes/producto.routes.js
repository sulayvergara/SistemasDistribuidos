const express = require('express');
const { registerProduct, getProduct } = require('../controllers/producto.controller');
const router = express.Router();

router.post('/registrar', registerProduct);
router.get('/obtener', getProduct);

module.exports = router;
