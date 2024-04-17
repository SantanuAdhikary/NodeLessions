

const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{

    if(req.url=='/')
    {
        res.writeHead(200,'ok',{"content-type":"text/html"});

        let readHtml = fs.createReadStream("./index.html","utf-8");

        readHtml.pipe(res);
    }
    else if(req.url=='/salman')
    {
        res.writeHead(200,'ok',{"content-type":"application/json"});

        fs.createReadStream("./data.json","utf-8").pipe(res);
    }
    else if(req.url=='/css')
    {
        res.writeHead(200,'ok',{"content-type":"text/css"});

        fs.createReadStream("./style.css","utf-8").pipe(res);
    }
    else{
        res.end("not found");
    }

})

server.listen(5000,err=>{
    if(err) throw err;

    console.log('server is running on port 5000');
})