var http = require('http');
var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//Connecting to database
mongoose.connect('mongodb://test2:test2@ds013366.mlab.com:13366/api');
app.set('view engine','ejs');
app.use('/assets',express.static('assets'));

var Schema = new mongoose.schema({
  classNumber: Number,
  registrationNumber:String
});

app.get('/login',function(req,res){
  res.render('index');
  console.log();
});
app.post('/login',urlencodedParser,function(req,res){
  console.log(req.body);

});
app.listen(3000);
