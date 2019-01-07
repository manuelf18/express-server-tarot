let express = require('express');
let router = express.Router();


router.get('/', (req, res, next) => {
    x = {
        'nombre': 'manuel',
        'apellido': 'fernandez'
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(x));
});

module.exports = router;