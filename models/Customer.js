const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const customerSchema = new Schema({
    customerName: {
        type: String,
        required: true
    },
    emailID: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Customer = mongoose.model('customer', customerSchema);