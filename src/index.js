var http = require('http');
var url = require('url');
 
var server = http.createServer();
server.on('request', function (request, response) {
    response.writeHead(200);
    var url_parts = url.parse(request.url);
    if (url_parts.pathname == "/blockio"){
        blockIO(function(){
            response.end("Hello World");
        });
    } else {
        nonblockIO(function(){
            response.end("Hello World");
        });       
    }
}).listen(1080);
 
function nonblockIO(callback) {
    setTimeout(callback, 1000);
}
 
function blockIO(callback) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + 1000);
    callback();
}