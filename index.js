var fs = require("fs");
var stream = require("stream");

var catFrames = fs.readFileSync(__dirname + "/nyan.data").toString().split("END");
var clearScreen = "\033[H\033[2J\033[?25l";

module.exports = function() {
    var pt = new stream.PassThrough();
    var i = 0;

    // http://nodejs.org/api/stream.html#stream_writable_write_chunk_encoding_callback_1
    function nyan() {
        var frame =  clearScreen + catFrames[i % catFrames.length];
        i++;
        
        // pt.write returns false if the underlying buffer if full. 
        // If that case we must wait for the drain event to be able
        // to write again.
        if (pt.write(frame)) {
            setTimeout(nyan, 100);
        }
        else {
            pt.once("drain", nyan);
        }

        return this;
    }

    pt.nyan = nyan;
    return pt;
};

