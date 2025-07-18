const path = require('path');

// muestra la página principal
function mainView(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
} // fin de mainView

module.exports = { mainView };