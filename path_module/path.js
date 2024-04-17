
//!  path module 

//? this module is used to work with file and directory path.


const path = require("path");

// console.log(__dirname);  //? it is used to give the current directory

// console.log(__filename); //? it will give the absolute path of the file you are working . 


//! 1.  basename() 

//? this is used to return the last part of a path 

// console.log(path.basename(__dirname));   
// console.log(path.basename(__filename));


//! 2. extname() 

//? it is used to return the extension of the path.


// console.log(path.extname(__filename));  //? .js

// console.log(path.extname(__dirname));   //? empty 


//! 3. parse() 

//? it coverts a path string into path object. 

// console.log(path.parse(__filename));


//! 4. format() 

//? it converts a path object into path string 

// console.log(  path.format(path.parse(__filename))  );


//! 5. isAbsolute() 

// console.log(path.isAbsolute(__filename))  //? true 

// console.log(path.isAbsolute("./fs.js"))   //? false 


//! 6. join()


// console.log(path.join('f1',"f2","f3"));  //?  f1\f2\f3

// console.log(path.join("/f1","f2","f3")); //? \f1\f2\f3

// console.log(path.join("/f1","//f2","f3"));  //? \f1\f2\f3

// console.log(path.join('/f1',"/f2","//f3"));   //? \f1\f2\f3

// console.log(path.join("/f1","/f2","../f3")); //? \f1\f3

// console.log(path.join("/f1","../f2","/f3"));  //?  \f2\f3

//! note :  
   //! in join method if we are giving (//) it will take only one. 
   //! when we are using (../) it won't take the previous path. 



   //! 7.  resolve() 

   //? it will resolves the path into an absolute path 


console.log(path.resolve('f1','f2','f3')); //? c:/ ...../f1/f2/f3 

 //? whenever we are passing with out '/' at the starting it will take the absolute path.

console.log(path.resolve("/f1","f2","f3"));


console.log(path.resolve("/f1","//f2","f3"));

console.log(path.resolve("/f1","//f2","../f3"));


