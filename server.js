var http = require("http");
var server = http.createServer((req,res)=>{
	res.write("Welcome to node js http module");
	res.end();
});
server.listen(9090);
console.log("Server is running on port number 9090");