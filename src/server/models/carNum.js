const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carNumSchema = new Schema({
  name: String,
});

module.exports = mongoose.model('CarNum', carNumSchema);