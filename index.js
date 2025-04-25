const express = require('express')
require('dotenv').config()
const connectDb = require('./db/config')

const PORT = process.env.PORT

// ref / object for express
const app = express()

// configure for ejs template
app.set("view engine", "ejs")
// configure view path
app.set("views", "./view")

// to integrate static files
app.use(express.static("./view"))

// body parser middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({
     origin: "*",
     methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
     preflightContinue: false,
}))

// import route into index
app.use(`/`, require('./router/bike.route'))


// server listener
app.listen(PORT, function(){
    connectDb()
    console.log(`server is runnging @ http://localhost:${PORT}`)
})