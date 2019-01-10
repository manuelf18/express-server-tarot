let express = require('express');
let app = express();

// routes
let router = require('./routes/router.js');

app.use('/', router);

const port = process.env.PORT || 3000;
app.listen(port, function(){ console.log(`Corriendo en el puerto ${port}...`) });