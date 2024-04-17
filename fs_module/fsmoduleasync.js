

const fs = require("fs");


//! 1.  reading data 

//! method name :  readFile() 

//?  syntax :  fs.readFile("path", cb)   

//todo: for doing async operation we need callback 

// cb => callback

// fs.readFile("./index.txt","utf-8",(err,data)=>{

//     if(err) throw err;

//     console.log(data);
// })


//! 2. create / write file 


//! method name : writeFile() 

//? syntax :  fs.writeFile("path","data you write",cb)

// fs.writeFile("app.txt","this is app file",err=>{

//     if(err) throw err;

//     console.log("file is created");
// })


 //! read data from one file and write it into another file 

   fs.readFile("./hello.txt",'utf-8', (err,data)=>{

    console.log(data);

    fs.writeFile("bye.txt",data,err=>{
    if(err) throw err;

    console.log("bye is crated")
     })

    })


//! 3.   appending data 

//! method name : appendFile();

//? syntax: fs.appendFile("path","data you will provide", cb);


// fs.appendFile("./app.txt"," hello ",err=>{
//     if(err) throw err;

//     console.log("data is appended");
// })


//! 4.  Delete File 

//! method name : unlink 

//? syntax :   fs.unlink("path",cb)

// fs.unlink("./app.txt",err=>{
//     if(err) throw err;

//     console.log("file is deleted");
// })

//! 5.  create Directory/ folder 

//! method name : mkdir 

//? syntax:  fs.mkdir("path", cb)

// fs.mkdir("authentication", err => {
//     if(err ) throw err;

//     console.log("folder is created")
// })


  //! nested folder creating 

//   fs.mkdir("routes",err=>{
//     if(err) throw err;

//     console.log('created routes folder')

//     fs.mkdir("routes/module",err=>{
//         if(err) throw err;
//         console.log("created module folder")


//         fs.writeFile("routes/module/app.txt","hi",err=>{
//             if(err) throw err;
//             console.log("app file is created");
//         })
//     })

//   })



//   fs.mkdir("salman",err=>{
//     if(err) throw err;
//     console.log("salman is folder is created");

//     fs.mkdir("salman/srk",err=>{
//         if(err) throw err;
//         console.log("srk folder is created");

//         fs.mkdir("salman/srk/mahesh",err=>{
//             if(err) throw err;
//             console.log("mahesh folder is created");

//             fs.writeFile("salman/srk/mahesh/movie.txt","movies will be stored here", err=>{
//                 if(err) throw err;

//                 console.log('movie.txt file is created');
//             })
//         })

//     })

//   })


//! 6.  removing/ delete folder 


//! method name : rmdir 

//? syntax:   fs.rmdir("path",cb)

// fs.rmdir("controllers", err=>{
//     if(err) throw err;

//     console.log("controllers folder is deleted");
// })


 //! removing/delete nested folders and files

//  fs.unlink("routes/module/app.txt",err=>{

//     if(err) throw err;
//     console.log("app file is deleted");

//     fs.rmdir("routes/module", err=>{
//         if(err) throw err; 

//         console.log("module folder is deleted");

//         fs.rmdir("routes",err=>{
//             if(err) throw err;

//             console.log("routes folder is deleted");
//          })
//     })
//  })


//! 7. rename file 


//!  method name : rename 

//? syntax:  fs.rename("path","new name",cb)

// fs.rename("index.txt","app.txt", err=>{
//     if(err) throw err;

//     console.log("rename is done");
// })