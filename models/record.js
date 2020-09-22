const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({
  name: {
    type: String,
    required: true
  }, 
  category: {
    type: String,
    required: false
  },
  date: {
    type: String
  },
  amount: {
    type: Number,
    required: false
  },
  merchant:{
    type: String,
    required: false
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true,
    required: true
  }
  
}) 

module.exports = mongoose.model('Record', recordSchema)