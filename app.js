let express = require('express');
let app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded());


// routes
let router = require('./routes/router.js');

app.use('/', router);


const port = 3000;
app.listen(port, function(){ console.log(`Corriendo en el puerto ${port}...`) });