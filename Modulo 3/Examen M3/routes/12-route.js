const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
// No modifiques nada arriba de esta línea

// Escribe la lógica de las rutas acá
router.delete('/accessories', (req, res) => {
    try {
        const { id } = req.body
        const BorrarAccesorio = controller.deleteAccessory(id)
        return res.status(200).json({message: BorrarAccesorio})
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
})

// Termine el Test 12
// No modifiques nada debajo de esta línea
module.exports = router;
