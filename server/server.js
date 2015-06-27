var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var expressValidator = require('express-validator');
var app = express();
var nodemailer = require("nodemailer");
var config = require('./config.json');

var smtpTransport = nodemailer.createTransport({
		service: "Gmail",
		auth: {
			user: config.email,
			pass: config.password
		}
	}); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use('/',express.static(config.baseURL));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/postEmail',function(req,res){

	req.checkBody('inputName', 'Invalid Name').notEmpty().isAlpha();
	req.checkBody('inputEmail', 'Invalid Email').notEmpty().isEmail();
	req.checkBody('inputSubject', 'Invalid Subject').notEmpty().isAlpha();
	req.checkBody('inputMessage', 'Invalid Message').notEmpty().isAlpha();

	var errors = req.validationErrors();
	if (errors) {
	   res.send(JSON.stringify({'success':false, 'message':'You Entered An '+ errors[0].msg}));
	   return;
	}


    var mailOptions={
		from: req.body.inputName + " " + req.body.inputEmail ,
	    to: config.email,
	    subject: req.body.inputSubject,
	    text: req.body.inputMessage
	}
	smtpTransport.sendMail(mailOptions, function(error, response){
		if(error){
			res.end(JSON.stringify({'success':false, 'message':'Please fill out the form completely.'}));
		}else{
			res.end(JSON.stringify({'success':true, 'message':'Thanks! The message has been sent successfully.'}));
		}
	});
});


var server = app.listen(3000, function () {

	var host = server.address().address;
	var port = server.address().port;

	console.log('Listening at http://%s:%s', host, port);

});