

const http = require("http");
const fs= require("fs");

const server = http.createServer((req,res)=>{

    res.writeHead(200,'ok',{"content-type":"text/css"});
   
    let readHtml = fs.createReadStream("./style.css","utf-8");
    readHtml.pipe(res);
})

server.listen(5000, err=>{
    if(err) throw err;

    console.log("app is running on port 5000");
})