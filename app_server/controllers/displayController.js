// versión 1
// const getDisplayData = (req, res) => {
//     const { displayValue } = req.body;
//     console.log("Display Value: " + displayValue);

//     res.json({ success: true, message: "Datos de display recibidos." });
// };

// versión 2
// function calculateDisplayValue(req, res) {
//     const { displayValue } = req.body;
//     console.log("Display Value: " + displayValue);
//     let result;

//     // validación: evita que la expresión termine en un operador
//     if (/[+\-*/]$/.test(displayValue.trim())) {
//         return res.status(400).json({
//             success: false,
//             message: "Introducción de datos inválida: termina en un operador no permitido."
//         });
//     } // fin del if

//     try {
//         result = evaluate(displayValue);
//         return res.json({ success: true, result, message: "El cálculo se realizó con éxito." });
//     } catch (error) {
//         return res.status(400).json({
//             success: false,
//             message: "Error al calcular",
//             error: error.message
//         });
//     } // fin del catch
// } // fin de la función

// versión 3
const { isValidExpression } = require('../services/validationService');
const { calculate } = require('../services/calculationService');

function calculateDisplayValue(req, res) {
    const { displayValue } = req.body;
    console.log("Display Value: " + displayValue);

    if (!isValidExpression(displayValue)) {
        return res.status(400).json({
            success: false,
            message: "Introducción de datos inválida: termina en un operador no permitido."
        });
    }

    try {
        const result = calculate(displayValue);
        return res.json({ success: true, result, message: "El cálculo se realizó con éxito." });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Error al calcular",
            error: error.message
        });
    }
}

module.exports = calculateDisplayValue;