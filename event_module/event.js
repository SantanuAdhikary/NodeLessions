

//! emit 
//? to trigger any events 

//! on 
   //? it is used to add a callback function and this callback function will be executed when the event is triggered. 


//! first step

// const EventEmitter = require("events");

// //! second step 

// const emitter = new EventEmitter();

// emitter.on("execute",()=>{
//     console.log('this is execute event');
// })

// emitter.emit('execute')



//! =======================================================================

   //! sending arguments 


const EventEmitter = require("events");

const emitter = new EventEmitter();


emitter.on("message",(sender,receiver)=>{
  console.log(` message has been sent by ${sender} to ${receiver} `)
})

emitter.emit("message","vk","rohit");



  

