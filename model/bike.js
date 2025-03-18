const mongoose = require('mongoose')

// Schema object
const BikeSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    color: {
        type: String,
        trim: true,
        required: true
    },
    model: {
        type: Number,
        required: true
    },
    company: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        default: "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png"
    },
    isActive: {
        type: Boolean,
        default: true
    }
},{
    collection: "bikes",
    timestamps: true
})

// export 
module.exports = mongoose.model("BikeModel", BikeSchema)