const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 3000

http.createServer(function(request, response) {

  console.log(`${request.method} request for ${request.url}`);

  if (request.url === "/") {
    response.writeHead(200, {"Content-Type": "text/plain"})
    response.end("Hello World!")

  } else {
    response.writeHead(404, {"Content-Type": "text/plain"})
    response.end("404: File not Found")
  }

}).listen(port);

console.log(`Server listening on ${port}`)
