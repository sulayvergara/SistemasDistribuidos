const express = require('express');
const { registerUser, getUsers } = require('../controllers/user.controller');
const router = express.Router();

router.post('/registrar', registerUser);
router.get('/obtener', getUsers);

module.exports = router;
