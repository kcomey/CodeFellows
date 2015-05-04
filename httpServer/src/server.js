var http = require("http");
var url = require("url");

//defaulting to the time function if called without any input i.e. /time
function time(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;

    console.log("Request for " + pathname + " received.");
    route(pathname, response, request);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started");
}

exports.time = time;
