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

  } else if (request.url.match(/.css$/)) {

    var cssPath = path.join(__dirname, 'public', request.url);
    var fileStream = fs.createReadStream(cssPath, "UTF-8");

    response.writeHead(200, {"Content-Type": "text/css"});

    fileStream.pipe(response);

  } else if (request.url.match(/.jpg$/)) {

    var imgPath = path.join(__dirname, 'public', request.url);
    var imgStream = fs.createReadStream(imgPath);

    response.writeHead(200, {"Content-Type": "image/jpeg"});

    imgStream.pipe(response);

  } else {
    response.writeHead(404, {"Content-Type": "text/plain"})
    response.end("404: File not Found")
  }

}).listen(port);

console.log(`Server listening on ${port}`)
