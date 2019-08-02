require('marko/node-require').install();
require('marko/express');


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

/* caminho estático */
app.use('/etc',express.static('src/app/public'));

/* configurando o middleware para receber json complexos */
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}))

/* o server.js precisa "vê" o routes para poder exportar app corretamente */
const routes = require('../app/routes/routes');
routes(app);

module.exports = app;