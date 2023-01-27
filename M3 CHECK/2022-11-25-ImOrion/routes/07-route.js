const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
// No modifiques nada arriba de esta línea

// Escribe la lógica de tu ruta GET /cats acá
// router.get('/cats', (req, res) => {});
router.get('/cats', (req, res) => {
    const {age} = req.query
    try{
        if(parseInt(age) ){
        res.status(200).send(controller.listCats(age))
    }else{
        res.status(200).send(controller.listCats())
    
    }
    }
    catch(err){
        res.status(400).send({error: err})
    }
    
     });
// No modifiques nada debajo de esta línea
module.exports = router;
