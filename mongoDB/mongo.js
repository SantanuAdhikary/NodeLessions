
const mongodb = require("mongodb").MongoClient;

const url = "mongodb://127.0.0.1:27017";

let connectDb = async()=>{

   try{
     
    let connect = await mongodb.connect(url);
    console.log('connection done');

    let database = await connect.db("Teachers");
    console.log('database created');

    await database.createCollection("users");
    console.log('collection created');

    //! CRUD operation 

    //! inserting data  

    //? insert one data : 
      //? method name: insertOne()

      

  //  await database.collection("users").insertOne(
  //   {
  //       name:"naresh",
  //       subject:"express"
  //   }
  //  )

  //  console.log('data inserted');

  //? insert more than one data . 
     //? method name: insertMany()

     //array of objects
    //  let arr = [ 
    //     {

    //     },
    //     {

    //     },
    //     {

    //     }]


//    await collection.insertMany(
//     [
//         {
//             name:"meghana",
//             subject:"html"
//         },
//         {
//             name:"sheeraz",
//             subject:"CSS"
//         },
//         {
//             name:"sudha",
//             subject:"js"
//         }
//     ]
//    )

//    console.log("more than one data inserted");


//! how to find the data 

 //? method name: find()

  //  let teachers = await database.collection("users").find().toArray();
  //  console.log(teachers);


//! finding one data 

//? method name: findOne()  
  //? ==> it will give only first data

// let teacher = await collection.findOne();
// console.log(teacher);


//! find perticular data 


// select * from teachers 
// where name="seeraz";

// let teacher = await collection.findOne(
//     {
//         name:"sheeraz"
//     }
// )
// console.log(teacher);


  //! UPDATE 

  //! update one data 

//   updateOne(
//     { filter condition},
//     { update },
//     { option },
//   )


//? upsert: true

  //? if the data is not present , then it will add the data 
  
//   await collection.updateOne(
//     {
//         name:"manikanta"
//     },
//     {
//        $set: {
//           subject:"mongodb"
//        }
//     },
//     {
//         upsert:true
//     }
//   )

//   console.log('update done');


//! update more than one data 

//? method name : updateMany();


//  await collection.updateMany(
//     {},
//     {
//         $set:{
//             isTeacher:true
//         }
//     }
//  )

//  console.log('update more than one data is done');


//! delete data 

//! delete one data 

 //? method : deleteOne()

//  await collection.deleteOne();   //? it will delete the first data 
//  console.log('deleted')

  //? delete perticular data 

//   await collection.deleteOne(
//     {
//         name:"manikanta"
//     }
//   )

//   console.log('perticular data is deleted');

//! delete more than one data 
 
//? method name: deleteMany()

// await collection.deleteMany();
// console.log('deleted all data');
  

   }
   catch(err)
   {
    console.log(err);
   }

}

connectDb();




    