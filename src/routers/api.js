const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const checks = require('../middleware/checks');
const {validarCheck} = require('../middleware/validarChecks');
const validarToken = require('../middleware/validarJWT')

router.get('/ver/consumo-final',validarToken,apiController.verComidas);
router.post('/crear/consumo-final',validarToken,checks ,validarCheck ,apiController.guardarComida);


module.exports = router;