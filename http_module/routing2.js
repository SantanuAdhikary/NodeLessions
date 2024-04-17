
const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{

    if(req.url=='/')
    {
         res.writeHead(200,"ok",{"content-type":"text/html"});
         fs.createReadStream("./index.html","utf-8").pipe(res);
    }
    else if(req.url=='/about')
    {
            res.end("this is about page")
    }
    else if(req.url=='/contact')
    {
            res.end("this is contact page");
    }
    else{
        res.end("not found");
    }
})
server.listen(5000,err=>{
    if(err) throw err;
    console.log('server is running on port 5000');
})