const mongoose = require("mongoose");
const env = require("./env");
mongoose.set("strictQuery",true);

async function connectDB() {
    const conn = await mongoose.connect(env.mongoUri,{
        serverSelectionTimeoutMS: 10_000,
    });
    console.log(
        `Mongoose connected: ${conn.connection.host}/${conn.connection.name}`

    );

    mongoose.connection.on("error",(err)=>{
        console.log("mongodb error:", err.message);
    });

    mongoose.connection.on("disconnected",()=>{
        console.warn("mongodb disconnected");
    });

    
}
module.exports={connectDB};