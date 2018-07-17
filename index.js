var http = require("http");
var express = require('express');
var app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');

//start mysql connection
var connection = mysql.createConnection({
  host     : 'localhost', //mysql database host name
  user     : 'root', //mysql database user name
  password : 'shruti04', //mysql database password
  database : 'nature_matrix' //mysql database name
});

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected with mysql database...')
})
//end mysql connection

//start body-parser configuration
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
//end body-parser configuration

//create app server
var server = app.listen(3000,  "127.0.0.1", function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});

//rest api to get all myclients
app.get('/myclient', function (req, res) {
   connection.query('select * from myclient', function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});
//rest api to get a single myclient data
app.get('/myclient/:id', function (req, res) {
   connection.query('select * from myclient where Id=?', [req.params.id], function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//rest api to create a new myclient record into mysql database
app.post('/addmyclient', function (req, res) {
   var params  = req.body;
   console.log(params);
   connection.query('INSERT INTO myclient SET ?', params, function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//rest api to update record into mysql database
app.put('/myclient', function (req, res) {
   connection.query('UPDATE `myclient` SET `Name`=?,`Password`=?,`Phone`=? where `Email`=?', [req.body.Name,req.body.Address, req.body.Country, req.body.Phone, req.body.Id], function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//rest api to delete record from mysql database
app.delete('/myclient', function (req, res) {
   console.log(req.body);
   connection.query('DELETE FROM `myclient` WHERE `Email`=?', [req.body.Email], function (error, results, fields) {
	  if (error) throw error;
	  res.end('Record has been deleted!');
	});
});