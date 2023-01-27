const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
// No modifiques nada arriba de esta línea

// Escribe la lógica de las rutas acá
// router.get('/accessories', (req, res) => {});
router.get('/accessories', (req, res) => {
    const{type, color} = req.query
    
    res.status(200).send(controller.getAccessories(type, color))
    
    
    });
// No modifiques nada debajo de esta línea
module.exports = router;
