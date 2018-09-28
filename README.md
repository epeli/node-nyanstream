# Nyancat stream for node.js

[![Greenkeeper badge](https://badges.greenkeeper.io/epeli/node-nyanstream.svg)](https://greenkeeper.io/)

    npm install nyanstream

stdout

```javascript
var nyanStream = require("nyanstream");
var cat = nyanStream();
cat.pipe(process.stdout);
cat.nyan();
```

tcp

```javascript
var nyanStream = require("nyanstream");
var net = require("net");
net.createServer(function(socket) {
  nyanStream().nyan().pipe(socket);
}).listen(1337);
```
    telnet localhost 1337

http

```javascript
var nyanStream = require("nyanstream");
var http = require("http");
http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  nyanStream().nyan().pipe(res);
}).listen(8080);
```

    wget -q -O - http://localhost:8080


Thanks to https://github.com/klange/nyancat
