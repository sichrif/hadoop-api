const express = require('express');

const Call = require('../models/calls');
const Book = require('../models/book');


// Initialize app
const router = express.Router();






router.get('/', function (req, res) {
    Book.find({}, function(err, calls){
        if(err){
            console.log(err);
        }
        else {
            res.json(calls);      
        }
    });
});








module.exports = router;