var express = require('express');
var router = express.Router();

var testcontroller = require("../controller/test.js");

router.get('/test', testcontroller.show);
router.post('/test', testcontroller.show);


router.get('*', function (req, res) {
    res.send('Sorry, this is an invalid URL.');
});

module.exports = router;