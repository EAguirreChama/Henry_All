const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
// No modifiques nada arriba de esta línea

// Escribe la lógica de tu ruta GET /cats acá
router.get('/cats', (req, res) => {
    try {
        const { age } = req.query
        const gatos = controller.listCats(age)
        if(age !== "1 year") {
            return res.status(200).json(controller.listCats())
        }
        return res.status(200).json(gatos)

    } catch (error) {
        return res.status(400).json({error: error.message})
    }
})

// Termine el Test 07
// No modifiques nada debajo de esta línea
module.exports = router;
