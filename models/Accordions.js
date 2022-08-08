// Using Node.js `require()`
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AccordionsSchema = new Schema({
    TD: {
        type: String,
        query: true
    },
    ND: {
        type: String,
        query: true
    },
});
//
const AccordionsModule = mongoose.model('Accordions', AccordionsSchema);
module.exports = AccordionsModule