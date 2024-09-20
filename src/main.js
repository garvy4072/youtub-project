import dotenv from "dotenv";
import ConnectionDB from "./db/index.js";
import app from "./app.js";
dotenv.config({
    path: `./.env`,
})
ConnectionDB()
.then(()=>{
   app.on("error",(error)=>{
    console.log("Error" , error)
    throw error
   })
   app.listen(process.env.PORT || 5000 , ()=>{
    
    console.log(" server is running on port 5000")
   })
}).catch((err)=>{
    console.log("Mongodb connection Failed !! " , err)
})

