const dotenv = require('dotenv').config()
const express = require('express');
// Cette ligne permet de creer une application express
const app = express();
const port = process.env.PORT;
const apiRouter = require('./routes/apiRouter').router;
const bodyparser = require('body-parser');
app.use(bodyparser.json());



app.use('/api/',apiRouter);



app.listen(port, () => {
    console.log('Server listening on port:' + port)
});
// Configuration de la route de la racine, une fonction callback est appelé
//lrsque la route est demandé par l'utilisateur
app.get('/',function(req,res) {
    res.setHeader('Content-Type','text/html');
    res.status(200).send('Chaima Abradi');
});


