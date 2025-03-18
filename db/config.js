const mongoose = require('mongoose')

const connectDb = async function(){
    if(process.env.MODE === "development") {
        // local db
        await mongoose.connect(process.env.LOCAL_DB)
        .then(res => {
            console.log(`local db connected`)
        }).catch(err => console.log(err.message))
        
    } else if (process.env.MODE === "production") {
        // cloud db
        await mongoose.connect(process.env.CLOUD_DB)
        .then(res => {
            console.log(`cloud db connected`)
        }).catch(err => console.log(err.message))
    } 
}

module.exports = connectDb