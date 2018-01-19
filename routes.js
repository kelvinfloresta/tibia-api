var express = require('express'),
    Routes = express.Router(),
    fetch = require('node-fetch')


Routes.get('/:world', (req, res, next) => {
    const world = req.params.world;
    fetch(`https://secure.tibia.com/community/?subtopic=worlds&world=${world}`)
        .then( response => {
            if(response.status !== 200)
                throw new Error("Failed to request tibia site, status => " + response.status);

            return response.text()
        })
        .then( html => {
            res.header("Access-Control-Allow-Origin", "*");
            res.send(html)
        })
        .catch( next )
})


module.exports = Routes;
