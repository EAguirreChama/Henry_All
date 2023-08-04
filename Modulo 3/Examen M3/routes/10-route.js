const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
// No modifiques nada arriba de esta línea

// Escribe la lógica de las rutas acá
router.put('/accessories', (req, res) => {
    try {
        const obj = req.body
        const Modificacion = controller.modifyAccessory(obj)
        return res.status(200).json(Modificacion)
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
})

// Termine el Test 10
// No modifiques nada debajo de esta línea
module.exports = router;
