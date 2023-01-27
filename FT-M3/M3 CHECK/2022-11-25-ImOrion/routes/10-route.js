const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
// No modifiques nada arriba de esta línea

// Escribe la lógica de las rutas acá
// router.put('/accessories', (req, res) => {});
router.put('/accessories', (req, res) => {
    const {id, type, color, description} = req.body
    try {
        if (!req.body){
            res.status(200).send(controller.modifyAccessory({}))
        } else {
        res.status(200).send(controller.modifyAccessory(req.body))
        }
    } catch (err) {
        res.status(404).send({error: err})
    }
})
// No modifiques nada debajo de esta línea
module.exports = router;
