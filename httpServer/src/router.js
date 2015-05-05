var requestHandlers = require("./requestHandlers");

function route(pathname, response, request) {
  console.log("About to route a request for " + pathname);

  if (/^(\/greet)/i.test(pathname)) {
    var name = pathname.replace(/\/greet\/*/, "");
    requestHandlers.greet(response, request, name);

  } else if (/^(\/time)/i.test(pathname) || pathname === '/') {
    requestHandlers.time(response, request);

  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not found");
    response.end();
  }
}

exports.route = route;
