import dotenv from "dotenv";
import ConnectionDB from "./db/index.js";
dotenv.config({
    path: `./.env`,
})
ConnectionDB()