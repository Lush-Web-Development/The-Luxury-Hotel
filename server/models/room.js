const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    maxCount:{
        type: Number,
        required: true
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    rentPerDay:{
        type: Number,
        required: true
    },
    imageUrls : [],
    currentBookings: [],
    type:{
        type: String,
        required: true 
    },
    description:{
        type: String,
        required: true 
    }
}, {
    timeStamps: true 
})

const roomModel = mongoose.model('rooms', roomSchema);

module.exports = roomModel;