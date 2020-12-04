const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const customerSchema = new Schema({
    customerName: {
        type: Text,
        required: true
    },
    emailID: {
        type: Text,
        required: true
    },
    location: {
        type: Text
    },
    date: {
        type: date,
        default: Date.now
    }
});

module.exports = Customer = mongoose.model('customer', customerSchema);