const express = require('express');
const app = express();
const hbs = require('hbs');
//importo el archivo helpers
require('./hbs/helpers');

// obtener el puerto para subir a heroku
const port = process.env.port || 3000;

// creacion de midelware
app.use(express.static(__dirname + '/public'));
// express HBS engine 
hbs.registerPartials(__dirname + '/views/parciales');
// express HBS engine 
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'alex!'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});