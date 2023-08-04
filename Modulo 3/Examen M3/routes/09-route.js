const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
// No modifiques nada arriba de esta línea

// Escribe la lógica de las rutas acá
router.get('/accessories', (req, res) => {
    const { type , color } = req.query
    const accesorios = controller.getAccessories(type, color)
    return res.status(200).json(accesorios)
})

// Termine el Test 09
// No modifiques nada debajo de esta línea
module.exports = router;
