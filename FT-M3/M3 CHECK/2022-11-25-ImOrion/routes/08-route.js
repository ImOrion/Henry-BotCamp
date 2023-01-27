const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
// No modifiques nada arriba de esta línea

// Escribe la lógica de las rutas acá
// router.post('/cat', (req, res) => {});
router.post('/cat', (req, res) => {
    const {name} = req.body
        try{
            
            res.status(200).send({cat: controller.addCat(name)})
        }
        catch(err){
            res.status(400).send({error: err})
        }
    });
// No modifiques nada debajo de esta línea
module.exports = router;
