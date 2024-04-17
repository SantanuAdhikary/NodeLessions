
//!  we need functions and we have to return it . 
//!  we have to export 

//! first way of exporting 

// let add = (a,b) => {

//     return a+b;
// }

// let sub = (a,b)=>{
//     return a-b;
// }

// let mul= (a,b)=>{
//     return a*b;
// }

// module.exports = {add,sub,mul};


//! 2nd way of exporting 

// let add = (a,b) => {

//     return a+b;
// }

// let sub = (a,b)=>{
//     return a-b;
// }

// let mul= (a,b)=>{
//     return a*b;
// }


// module.exports.add = add ;
// module.exports.sub = sub ; 
// module.exports.mul = mul ;



//! 3rd way of exporting 


exports.add = (a,b)=>{
    return a+b;
}

exports.sub=(a,b)=>{
    return a-b;
}

exports.mul= (a,b)=>{
    return a*b;
}