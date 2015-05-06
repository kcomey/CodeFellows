var server = require("./server");
var router = require("./router");


// Will show time if nothing is added to the URL
server.time(router.route);
