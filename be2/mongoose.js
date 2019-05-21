const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/H51902',)

var db = mongoose.connection;

db.on('error', function () {
    console.log('error')
});
db.once('open', function () {
    console.log('succes')
});