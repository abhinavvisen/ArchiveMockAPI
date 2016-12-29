var http = require('http');
var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

mongoose.connect('mongodb://test:test@ds145315.mlab.com:45315/api');
app.set('view engine','ejs');
app.use('/assets',express.static('assets'));

var schema =new mongoose.Schema({
  classNumber:Number,
  RegistrationNumber:String
});





app.get('/login',function(req,res){
  res.render('index');
});
app.listen(3000);
