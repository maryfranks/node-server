const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 3000

http.createServer(function(request, response) {

  console.log(`${request.method} request for ${request.url}`);

  if (request.url === "/") {
    fs.readFile("./public/index.html", "UTF-8", function(err, html) {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.end(html);
    });

  } else {
    response.writeHead(404, {"Content-Type": "text/plain"})
    response.end("404: File not Found")
  }

}).listen(port);

console.log(`Server listening on ${port}`)
