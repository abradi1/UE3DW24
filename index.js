const dotenv = require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT;
//const apiRouter = require('./routes/apiRouter').app;

//app.use('/api/',apiRouter);
require("./routes/apiRouter")(app);

app.listen(port, () => {
    console.log('Server listening on port:' + port)
});
// Configuration de la route de la racine, une fonction callback est appelé
//lrsque la route est demandé par l'utilisateur
app.get('/',function(req,res) {
    res.setHeader('Content-Type','text/html');
    res.status(200).send('Chaima Abradi');
});



