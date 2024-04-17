

//!  Stream In NodeJs

//?  it is an object that let us read data from a source or write to a destination in continious manner. 

//? listening musics, watching videoes in real time.


//!  Types Of Stream In NodeJs 

//? 1. Readable Stream: it will help us to read data from source.

//? 2. Writable Stream: we can write data to destination.

//? 3. Duplex Stream: we can perform both reading and write. 

//? 4. Transform Stream: similar to duplex stream but here we can modify the data here.


//! events 

//! data : this event will fire whenever we have some available data to read 

//! end  : when we don't have any data to read 

//! error: this event is fired when there is any error.

//! finish : when the data will be flushed.



//! 1.  Readable Stream


//! method name:  createReadStream()

//? syntax:  fs.createReadStream("path","utf-8")

//? after this we need data event. 
//? we have to use "on" for using any event in nodejs.

// const fs = require("fs");

// const readStream = fs.createReadStream("./bye.txt","utf-8");

// readStream.on("end",()=>{
//     console.log('done ');
// })
// readStream.on("data", chunk=>{
//     console.log(chunk);
// })
// readStream.on("error", err=>{
//     console.log(err);
// })


//! highWaterMark :  it is used to determine how much data buffer inside the stream . 


// const readData = fs.createReadStream("./bye.txt",{highWaterMark: 20})

// readData.on("data", chunk=>{
//     console.log(` size: ${chunk.length} data: ${chunk.toString()}`);
// })


//! 2.   Writable Stream 

//! method name : createWriteStream();



const fs = require("fs");

// let writeStream = fs.createWriteStream("saturday.txt");


// writeStream.write("today is saturday...", (err)=>{
//     if( err) throw err;

//     console.log("data is written");
// })

//! 3. Duplex Stream 


//?  this will represent both readable and writable stream. 
//? here the data flows bidirectional means we can perform writing and reading data simultaneously. 

//? use : file i/o operation, network communication


//!  Stream.pipe() ==> this method used to take a readable stream and connect with writable stream .


let readStream = fs.createReadStream("./bye.txt","utf-8");

let writeStream = fs.createWriteStream("express.txt");

readStream.pipe(writeStream);

console.log('data is written');
