let port = 9090;
let http = require("http");

http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{"content-type":"text/html"})
        res.write("Welcome to Http Server Home Page");
    }else if(req.url=="/aboutus"){
        res.writeHead(200,{"content-type":"text/html"});
        res.write("Welcome to Http Server - about Us");
    }else if(req.url=="/contactus"){
        res.writeHead(200,{"content-type":"text/html"});
        res.write("Welcome to Http Server - contact us");

    }else {
        res.writeHead(404,{"content-type":"text/plain"});
        res.write("Error Page");
    }
    res.end();
}).listen(port);

console.log(`The server is running on ${port}`);
