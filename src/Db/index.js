import mongoose from "mongoose";
import { DB_Name } from "../constant.js";
const ConnectionDB = async ()=>{
    try{
        const connectionInstance =await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
        
        console.log(`\n DB Connected || Host : ${connectionInstance.connection.host} `);
    }catch(err){
        console.log(err);
        process.exit(1)
    }
}

export default ConnectionDB;