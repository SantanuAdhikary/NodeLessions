const http = require("http");
const fs = require("fs");
const url = require("url");

// http://localhost:5000/c.txt

const server = http.createServer((req,res)=>{

   const urlObj =  url.parse(req.url,true);

   const filename = "." + urlObj.pathname;

   fs.readFile(filename,(err,data)=>{
    if(err) 
    res.end("file is not found");

     res.end(data);
   })

})

server.listen(5000,err=>{
    if(err) throw err;
    console.log('server running');
})