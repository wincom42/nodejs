const db = require('../config/db');
var register = db.mongoose.Schema({
    name: String
});
var registration = db.mongoose.model('registration', register,'register');
module.exports = {registration};