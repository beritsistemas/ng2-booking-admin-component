var mongoose = require('mongoose');

var dayInfo={
    date:String,
    price:Number,
    availability:Number,
    min_nigths:Number
    };   

var schema = mongoose.Schema({
     id:Number,
     yearMonth:String,
     dayInfos:[dayInfo]
});

var RoomAPM = mongoose.model('RoomAPM', schema);

module.exports = RoomAPM;