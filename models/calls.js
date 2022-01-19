const mongoose = require('mongoose');

let callsCH = mongoose.Schema({
    country: {
        type: String,
     },
     ncalls: {
        type: String,
 
    } 
});

let Call = module.exports = mongoose.model('Call', callsCH);