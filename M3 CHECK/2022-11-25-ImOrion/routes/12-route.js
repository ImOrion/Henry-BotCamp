const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
// No modifiques nada arriba de esta línea

// Escribe la lógica de las rutas acá
// router.delete('/accessories', (req, res) => {});
router.delete('/accessories', (req, res) => {
    const {id} = req.body
    try {
        res.status(200).send({message: controller.deleteAccessory(id)})
    } catch (err) {
        res.status(404).send({error: err})
    }
})
// No modifiques nada debajo de esta línea
module.exports = router;
