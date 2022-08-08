// Using Node.js `require()`
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    Phone: {
        type: String,
        query: true
    },
    Email: {
        type: String,
        query: true
    },
    DiaChi: {
        type: String,
        query: true
    },
    Url: {
        type: String,
        query: true
    },
});
//
const ContactModule = mongoose.model('Contact', ContactSchema);
module.exports = ContactModule