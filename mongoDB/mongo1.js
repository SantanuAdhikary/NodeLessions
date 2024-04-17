const mongodb = require("mongodb").MongoClient;

const url = "mongodb://127.0.0.1:27017";

const connectDb = async()=>{
 
     let connect = await mongodb.connect(url);
     console.log('connected');

     let database = connect.db("Trainers");
     console.log("database created");

    //  await database.createCollection("user");
    //  console.log('collection created');

    await database.collection("user").insertOne(
        {
            name:"sudha",
            id:"06"
        }
    )
    console.log('data inserted');
}

connectDb()