import express from "express"
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()
app.use(cors({
    origin :  "*",
    credentials : true

}))
app.use(express.json({limit :"20kb"}))
app.use(express.urlencoded({
    extended : true,
    limit : "20kb"
}))
app.use(express.static("Public"))
app.use(cookieParser())

export default  app