var express = require('express');
var path = require('path');
var morgan = require('morgan'); // logger
var bodyParser = require('body-parser');
var async=require('async');

var app = express();
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname + '/../../dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));


// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

var db = mongoose.connection;
mongoose.Promise = global.Promise;

// Models
var RoomAPM = require('./roomAPM.model.js');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');


var createDefaultData=function(yearMonth,callback){
    //TODO the default value must be in another collection
        var defaultValues={
          price:100,availability:3,min_nigths:1 }
        var listOfRooms=[5,6]
        //TODO the default value must be in another collection


      var dayInfos=[];
      
      var year        = yearMonth.substring(0,4);
      var month1       = yearMonth.substring(4,6);
      var fecha        = new Date(Number(year), Number(month1)-1, 1);

       while (fecha.getMonth()+1 == month1) {
          var day=fecha.getDate();
          dayInfos.push(Object.assign({date:yearMonth+(day.toString().length==1?"0"+day:day)},defaultValues));
          fecha.setDate(fecha.getDate() + 1);
       } 
       async.map(listOfRooms,function(roomID,callback){

            
          var roomData={id:roomID,yearMonth:yearMonth,dayInfos:dayInfos};

          var toInsert= new RoomAPM(roomData)
          console.log("Creating values",roomData)
          RoomAPM.create(toInsert,function(err){
            if(!err){
              callback(null,roomData)
            }else{
              console.error(err)
              callback(err)
            }
         })


       }, callback);

         
}
  // APIs
  // select all
  app.get('/rooms-apm/:yearmonth', function(req, res) {
    RoomAPM.find({yearMonth:req.params.yearmonth}, function(err, data) {
      if(err) return console.error(err);
      var yearMonth=req.params.yearmonth;
      if(!data||data.length==0){
        //there is no data available in database
        createDefaultData(yearMonth,function(err,values){
           if(!err){
             
            console.log(values);
            res.json(values);
           }else
            res.json({error:"Error"})
        })
  } else{
    
        console.log("Sending data available",data);
        res.json(data);
  }  
    });
  });

  

  // find by id
 /* app.get('/rooms-apm/:id', function(req, res) {
    RoomAPM.findOne({_id: req.params.id}, function(err, obj) {
      if(err) return console.error(err);
      res.json(obj);
    })
  });*/

  // update by id
  app.put('/rooms-apm/:id/:yearmonth', function(req, res) {
    
    RoomAPM.findOne({yearMonth:req.params.yearmonth,id: req.params.id}, function(err, room) {
        if(err) return console.error(err);
        if(room){
            console.log(req.body)
            console.log(room)
            console.log(room.dayInfos)
            room.dayInfos.map(dayInfo=>{

                if(dayInfo.date==req.body.date){
                  
                  console.log("Encontre",dayInfo);
                  dayInfo=Object.assign(dayInfo,req.body)
                   console.log("Altere",dayInfo);
                }
            });
            /* 
            RoomAPM.update(room */
            RoomAPM.collection.save( room.toObject(), function(err) {
              if(err) return console.error(err);
              res.json(room.toObject());
            })
  
          }else{
                console.log("Error no encontre",err)
                  res.sendStatus(200);
          }
      });
  })

  // all other routes are handled by Angular
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname,'/../../dist/index.html'));
  });

  app.listen(app.get('port'), function() {
    console.log('Angular 2 Full Stack listening on port '+app.get('port'));
  });
});

module.exports = app;