const express = require('express')

const router = express.Router()

// importamos los controladores
const homeController = require('../controllers/homeController');
const displayController = require('../controllers/displayController');

// muestra la página principal
router.get('/', homeController.mainView);

// obtención del valor de la pantalla
router.post('/calculate', displayController);

// se crea como modulo para exportar al servidor
module.exports = router