// Using Node.js `require()`
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const linenumberSchema = new Schema({
    Number: {
        type: String,
        query: true
    },
    TD: {
        type: String,
        query: true
    },
});
//
const linenumberModule = mongoose.model('linenumber', linenumberSchema);
module.exports = linenumberModule