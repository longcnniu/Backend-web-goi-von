// Using Node.js `require()`
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CarouselsSchema = new Schema({
    url: {
        type: String,
        query: true
    },
});
//
const CarouselsModule = mongoose.model('Carousels', CarouselsSchema);
module.exports = CarouselsModule