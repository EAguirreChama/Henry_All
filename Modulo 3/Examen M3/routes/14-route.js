const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
// No modifiques nada arriba de esta línea

// Escribe la lógica de las rutas acá
router.put('/cats/add-accessory', (req, res) => {
    try {
        const { catName, catAccessory } = req.body
        const AgregarAcc = controller.addCatAccessory(catName, catAccessory)
        return res.status(200).json({message: AgregarAcc})
    } catch (error) {
       return res.status(400).json({error: error.message}) 
    }
})

// Termine El CheckPoint de M3
// No modifiques nada debajo de esta línea
module.exports = router;
