
const fs = require("fs").promises;

const fs1 = require("fs");


//! 1.  read data with async await 


// let readData = async ()=>{

//     let data = await fs.readFile("app.txt","utf-8");
//     console.log(data);
// }

// readData();




//! 2.  creating file with async and await 


// let createFile = async ()=>{

//     await fs.writeFile("index.txt","this is indexFile");
//     console.log("file is created");
// }

// createFile();


//! 3.  append file with the help of async and await 


// let appendFile = async ()=>{

//         await fs.appendFile("app.txt"," 98989898");
//         console.log("data is appended");
// }

// appendFile();


//! 4.  delete file with the help of async and await 

// let deleteFile = async ()=>{

//     await fs.unlink("app.txt");
//     console.log("file is deleted");

// }

// deleteFile();


//! 5. create directory with async and await 


// let createDirectory = async ()=>{

//     await fs.mkdir("controllers");
//     console.log('folder is created');
// }

// createDirectory();


//! 6. delete directory with async and await 


// let removeFolder = async()=>{

//     await fs.rmdir("authentication");
//     console.log("folder is deleted");
// }

// removeFolder();


//! 7.  rename file with async and await 


// let renameFile = async()=>{

//     await fs.rename("hello.txt","hlw.txt");
//     console.log("rename is done");
// }

// renameFile();








 //! reading file with call back


//  fs1.readFile("hlw.txt","utf-8",(err,data)=>{
//     if(err) throw err;

//     console.log(data);
//  })

 //! with promise 

//  fs.readFile("hlw.txt","utf-8")
//  .then(data=>console.log(data))
//  .catch(err=>console.log(err));


 //! async await 

//  let readData = async()=>{

//    let data = await fs.readFile("hlw.txt","utf-8");
//    console.log(data);

//  }
//  readData();



//! write file with cb


// fs1.writeFile("style.js","this is js file" ,err=>{
//     if(err) throw err;
//     console.log("file is created");
// })

//! with promise


// fs.writeFile("style.txt","this is text file")
//   .then(_=>{console.log('file is created')})
//   .catch(err=>{console.log(err)})


//! with async await 

// let createFile = async()=>{
//   await fs.writeFile("style1.txt","jaljfljlf");
//     console.log("file is created");
// }

// createFile();