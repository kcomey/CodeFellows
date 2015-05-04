var querystring = require("querystring");
var url = require("url");
  fs = require("fs");

function time(response) {
  console.log("Request handler to 'time' was called.");
  var serverTime = formatDate();

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<h3>The current time is '+ serverTime + '</h3>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function greet(response, request, name) {
  console.log("Request handler 'greet' was called.");
  if (!name) { name = "Stranger";}

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<h3>Howdy '  + name + '!</h3>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function formatDate() {
  var d = new Date();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();
  var serverTime = hours + ':' + minutes + ':' + seconds;
  return serverTime;
}

exports.time = time;
exports.greet = greet;

