const express = require('express');
const path = require('path');
const Routes = require('./routes');
const PORT = process.env.PORT || 3000;

express()
    .use('/api', Routes)
    .use(express.static(path.join(__dirname, 'public')))
    .use( errorHandler )
    .listen( PORT, () => console.log("Listening on port =>", PORT))

function errorHandler (err, req, res, next) {
    console.error(err);
    res.status(500).send("An error occurred!");
}