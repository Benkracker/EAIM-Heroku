//Hello-world Route
var express = require('express');
var router = express.Router();

router.get('/hello-world', (req, res, next) => {
    res.send('Hello World, from the EA(I)M! Heorku information session!');
});

module.exports = router;