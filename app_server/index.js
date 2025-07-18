const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;
const HOST = 'localhost';

// RUTAS
const routes = require('./routes/routes');

// settea por defecto que las vistas estáticas las coja de las que haya en "public"
app.use(express.static('public'));

// - middleware de tipo JSON
app.use(express.json());

// - middleware html estático (vistas estáticas)
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// enumerar qué endpoints existen:
app.use("/", (req, res) => {
    res.json({
        "success": true,
        "data": {
            "/": "Página principal",
            "/send": "Procesa el valor de la calculadora"
        },
        "message": "Estos son los endpoints"
    })
});

app.listen(PORT, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});