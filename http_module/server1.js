
//!  how to serve html file with cb 

const http = require("http");
const fs = require("fs");

// const server = http.createServer((req,res)=>{

//     fs.readFile("./index.html","utf-8",(err,data)=>{
//         if(err) {
//             throw err;
//             res.end();
//         }
//         else{
//             res.writeHead(200,'ok',{"content-type":"text/html"});
//             res.end(data);
//         }
//         console.log(data);
//     })   
// })

// server.listen(5000,err=>{
//     if(err) throw err;

//     console.log('server1 is running');
// })


//! serving html file with stream 


const server = http.createServer((req,res)=>{

    res.writeHead(200,'ok',{"content-type":"text/html"});

    let data = fs.createReadStream("./index.html","utf-8");

    data.pipe(res);

})

server.listen(5000,err=>{
    if(err) throw err;

    console.log('app is running');
})


//! how to serve css file 

// const server = http.createServer((req,res)=>{

//     res.writeHead(200,'ok',{"content-type":"text/css"});

//     let data = fs.createReadStream("./style.css","utf-8");

//     data.pipe(res);

// })

// server.listen(5000,err=>{
//     if(err) throw err;

//     console.log('app is running');
// })


//! how to serve json file 

// const server = http.createServer((req,res)=>{

//     res.writeHead(200,'ok',{"content-type":"application/json"});

//     let data = fs.createReadStream("./data.json","utf-8");

//     data.pipe(res);
// })

// server.listen(5000,err=>{
//     if(err) throw err;

//     console.log('app is running');
// })