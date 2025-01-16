// product-service/src/middleware/auth.js
const axios = require('axios');

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization');
    
    if (!token) {
      return res.status(401).json({ error: 'Token no proporcionado' });
    }

    // Verificar token con C1
    await axios.post(
      `${process.env.AUTH_SERVICE_URL}/api/auth/verify-token`,
      {},
      { headers: { Authorization: token } }
    );

    next();
  } catch (error) {
    res.status(401).json({ error: 'No autorizado' });
  }
};

module.exports = authMiddleware;