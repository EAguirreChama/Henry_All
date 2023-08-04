const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
// No modifiques nada arriba de esta línea

// Escribe la lógica de las rutas acá
router.post('/cat', (req, res) => {
    try {
        const { name } = req.body
        const NuevoGato = controller.addCat(name)
        return res.status(200).json({cat: NuevoGato})
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
})

// Termine el Test 08
// No modifiques nada debajo de esta línea
module.exports = router;
