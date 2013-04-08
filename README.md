
# Nyancat stream for node.js

    npm install nyancat-stream

stdout

    node
    > var cat = require("nyancat-stream");
    > cat().pipe(process.stdout);
    > cat.nyan();

tcp

    node
    > var cat = require("nyancat-stream");
    > var net = require("net");
    > net.createServer(function(socket) {
    >   cat().nyan().pipe(socket);
    > }).listen(1337);

Thanks to https://github.com/klange/nyancat
