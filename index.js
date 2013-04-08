var fs = require("fs");
var stream = require("stream");

var catFrames = fs.readFileSync(__dirname + "/nyan.data").toString().split("END");

module.exports = function() {
    var pt = new stream.PassThrough();
    pt.nyan = function() {
        var i = 0;
        setInterval(function() {
            pt.write("\033[H\033[2J\033[?25l");
            pt.write(catFrames[i % catFrames.length]);
            i++;
        }, 100);
        return this;
    };

    return pt;
};

