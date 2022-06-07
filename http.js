const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to the homepage");
  }
  if (req.url === "/about") {
    res.end("here is short history");
  }
  res.end(`<h1>Doesn't exist</h1>
  <p>404</p>
  <a href ="/">back home</a>`);
});

server.listen(5000);
