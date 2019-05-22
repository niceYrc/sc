const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/H51902',{useNewUrlParser:true})

var db = mongoose.connection;

db.on('error', function () {
    console.log('error')
});
db.once('open', function () {
    console.log('succes')
});

const cxkSchema = mongoose.Schema({
    name:String,
    age: Number,
    hobby: Array
})

const CxkModel = mongoose.model("woman",cxkSchema)
   
const basketBall = new CxkModel({
    name:"王大锤",
    age:20,
    hobby:["sing","jump","rap"]
})

basketBall.save()