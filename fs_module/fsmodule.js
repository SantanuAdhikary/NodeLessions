

//! 1st step :  we have to import

const fs = require("fs");

// //! operations 
 
// //!  1. read file synchronously 

//? syntax :   fs.readFileSync("path","utf-8")

// let data = fs.readFileSync("./index.txt", "utf-8");

//  //? utf = unicode transformation format 

// // console.log(data.toString());

// console.log(data);


//!  write / create file synchronously 


//! method name : writeFileSync()

//? syntax :  fs.writeFileSync("path", "data you will write");

// fs.writeFileSync("sudha.txt","good afternoon");
// console.log('data is written successfully');


//!  how to read data from one file and write it into another file.

// let data = fs.readFileSync("sudha.txt","utf-8");
// console.log('reading is done');

// fs.writeFileSync("salman.txt",data);
// console.log("data is written");


//! 3.  append file

//! method name : appendFileSync()

//? syntax :  fs.appnedFileSync("path","data");

// fs.appendFileSync("salman.txt"," this is the second statement");
// console.log("data appended");



//! 4.  creating folder

//! method name : mkdirSync()

//? syntax:  fs.mkdirSync(" path");

// fs.mkdirSync("routes");
// console.log("folder is created");

//! how to create nested folders 

// fs.mkdirSync("routes/authentication");
// console.log("authentication folder is created");

// fs.writeFileSync("routes/authentication/data.txt","this is data");
// console.log("data file is created");


//! 5.  delete file 

//! method name: unlinkSync();

//? syntax:  fs.unlinkSync("path of file");

// fs.unlinkSync("./salman.txt");
// console.log("salman file is deleted");


//!  delete folder 

//! method name : rmdirSync();

//? syntax : fs.rmdirSync("path");

//  fs.mkdirSync("controllers");

//  fs.rmdirSync("controllers");
//  console.log("folder is deleted");

//!       how to delete nested folder 

// TODO:   if the folder is not empty we can't delete it . 


// fs.unlinkSync("routes/authentication/data.txt");
// console.log("data.txt file is deleted");

// fs.rmdirSync("routes/authentication");
// console.log("authentication folder is removed");

// fs.rmdirSync("routes");
// console.log("routes folder is removed successfully");



//! 6.  rename file 

//! method name : renameSync();

//? syntax: fs.renameSync("path","new name");

// fs.renameSync("sudha.txt","s.txt");
// console.log("file name is changed");

   // TODO: we can change the file format also 

    // fs.renameSync("s.txt","s.js");


//!  rename folder 

  fs.renameSync("routes","controllers");
  console.log('folder name is changed');

