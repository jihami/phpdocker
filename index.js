var http = require('http'); 
var handleRequest = function(req, res){
	res.end('hello');
}; 
var www = http.createServer(handleRequest);
www.listen(3000);
