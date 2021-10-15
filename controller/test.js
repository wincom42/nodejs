//controller list
var test = require('../models/test.js');

const show = function (req, res, next) {
    if (req.method == "POST") {
        var reg = new test.registration({ name: req.body.name });
        reg.save(function(err,data){
            console.log(data.id);
        });
        
    }
     
    res.render('test', {
        name: "TutorialsPoint"
    });
};

module.exports = { show };

