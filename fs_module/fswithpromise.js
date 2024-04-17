
const fs = require("fs").promises;


// fs.readFile("hello.txt","utf-8",(err,data)=>{

//     if(err) throw err;

//     console.log(data);
// })

//!  readFile with promise 

//! method name : readFile();

//?  fs.readFile("path","utf-8")
//?    .then()
// ?   .catch()


// fs.readFile("hello.txt","utf-8")
// .then(data=>{
//     console.log(data);
// }).catch(err=>{

//     console.log(err);
// })



//!  write/ create file with the help of promise 


//! method name: writeFile 

//? syntax:   fs.writeFile("path","proive data").then().catch()

// fs.writeFile("nodejs.txt","promise async ")
//     .then(_=>{
//         console.log("file is createed")
//     })
//     .catch(err=>{
//         console.log(err);
//     })


//!  append file with promise 

//! method name: appendFile 

//? syntax:  fs.appendFile("path","data").then().catch();

// fs.appendFile("./nodejs.txt"," this is append data")
//   .then(_=>{
//     console.log("data is appended")
//   })
//   .catch(err=>{
//     console.log(err);
//   });


//! delete file with promise 

//! method name: unlink

//? syntax:  fs.unlink("path").then().catch();

// fs.unlink("./nodejs1.txt")
//   .then(_=>{
//     console.log("file is deleted")
//   })
//   .catch(err=>{
//     console.log(err);
//   })


//!  create directory/ folder 

//! method name: mkdir

//? syntax:  fs.mkdir("path").then().catch();

// fs.mkdir("controllers")
//   .then(_=>{
//     console.log("folder is created")
//   })
//   .catch(err=>{
//     console.log(err);
//   })


//! delete directory 

//! method name: rmdir

//? syntax:  fs.rmdir("path").then().catch();

// fs.rmdir("controllers")
//   .then(_=>{
//     console.log("folder is deleted");
//   })
//   .catch(err=>{
//     console.log(err);
//   })


//! rename with promise 

//! method name: rename

//? syntax:  fs.rename("path","new name").then().catch();

fs.rename("hi.txt","hiiiii.txt")
  .then(_=>{
    console.log("rename done")
  })
  .catch(err=>{
    console.log(err);
  })