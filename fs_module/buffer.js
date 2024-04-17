

//!  Buffer 

//? 1.  it is temporary storage that is used to store chunk of data  and transfer it one place to another place.

//?  2. a buffer is a way to store and manipulate binary data in nodejs. 

  //?  images , audio , videoes 


  //! How to create Buffer in nodejs 

  //! 1.  method name : Buffer.from()

  //? syntax :  Buffer.from(value)
   
//   let buf = Buffer.from("hello");

//    console.log(buf);            //? it will give buffer data
//   console.log(buf.toString());  //? original data.

//   console.log(buf[0]);   //? 104 for h
//   console.log(buf[1]);   //? 101 for e 


//! 2.  Buffer.alloc() 

//? syntax:  Buffer.alloc(size,fill)

// let buf1 = Buffer.alloc(6);  //? it will allocate 6 place with 0

// let buf2 = Buffer.alloc(3,"h") //? 

// console.log(buf1);
// console.log(buf2);


// let buf3 = Buffer.alloc(4);

// buf3.write("hello nodejs developers");

// console.log(buf3.toString());    //? hell 


//! 3.  Buffer.isBuffer()


// let buf4 = Buffer.from("hello");

// let str ="hello";

// console.log(Buffer.isBuffer(buf4));  //? true
// console.log(Buffer.isBuffer(str));   //? false 


// //! 4. how to know the length of the buffer 

// //? syntax:  buffer_variable.length

// console.log(buf4.length);



//! 5.  copy of buffer 

//! method name :  copy() ;

//? syntax:   from where we copy.copy(in which you want to copy)

// let buf5 = Buffer.from("hello,this is buffer data");

// let buf_copy = Buffer.alloc(26);

// buf5.copy(buf_copy)

// console.log(buf_copy.toString());


//! 6.  slice()


// let buf6 = Buffer.from("hello node people");

// let newBuf = buf6.slice(0,4);

// console.log(newBuf.toString());
