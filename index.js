const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // build filepath

  let ext = path.extname(path.join(req.url, ""));
  let filePath = path.join(
    __dirname,
    ext === ".html" ? "public" : "",
    req.url === "/" ? "public/Start.html" : req.url
  );

  let contentType = "text/html";
  switch (ext) {
    case ".js":
      // something 1;
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;

    case ".jpg":
      contentType = "image/jpg";
      break;

    case ".ico":
      contentType = "image/x-icon";
      break;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": contentType });
    res.end(content);
  });

  console.log(1, filePath, req.url);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}..`));
