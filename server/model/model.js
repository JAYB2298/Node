const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    task : {
        type : String,
        required: true
    },
    subtask : {
        type: String,
        required: true,
        unique: true
    },
    date : { 
         type : Date 
    },
    time : {
         type: Number, 
     } 
    
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;