

//!  what is http 

//? hyper text transfer protocol , used to transfer data between client and server .

//!  methods of http 

//!  Get  : fetch the data from the source or read the data
//!  Post : sending the data / creating new resource 
//!  Put  : it is used to modify the stored data 
//!  Patch : it is used to modify particular data 
//!  Delete : to delete the resource 


//! 1st step :
const http = require("http");

//! 2nd step:

const server = http.createServer((req,res)=>{

    //! set the header 

    res.writeHead(200,'ok',{"content-type":"text/plain"});

    //! end the cycle 

    res.end("this is my server")
})

//! 3rd step:
server.listen(5000,err=>{

    if(err) throw err;
    console.log('my server is running on port 5000');
})



