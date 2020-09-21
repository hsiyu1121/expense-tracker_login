const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({
  name: {
    type: String,
    required: true
  }, 
  category: {
    type: String,
    default: true
  },
  date: {
    type: String,
    default: true
  },
  amount: {
    type: Number,
    required: true
  },
  merchant:{
    type: String
  }
  
}) 

module.exports = mongoose.model('Record', recordSchema)