const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
// No modifiques nada arriba de esta línea

// Escribe la lógica de las rutas acá
// router.post('/accessories', (req, res) => {});
router.post('/accessories', (req, res) => {
    const {id, color, type, description} = req.body
    try {
        res.status(201).send({message: controller.addAccessory({id, color, type, description})})
    } catch (err) {
        res.status(400).send({error: err})
    }
})
// No modifiques nada debajo de esta línea
module.exports = router;
