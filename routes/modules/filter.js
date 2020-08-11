const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')
const Handlebars = require('handlebars')

Handlebars.registerHelper('isEqual', (category, value, options) => {
  if (category === value) {
    return options.fn(this)
  } else {
    return options.inverse(this)
  }
})

router.get('/:category', (req, res) => {
  Record.find()
    .lean()
    .sort({date: 'desc'})
    .then( record => {
      console.log(req.body)
      console.log(req.params.category)
      let totalAmount = 0
      if( record.length !== 0){
        totalAmount = record.map(record => record.amount).reduce((accumulator, currentValue) => accumulator + currentValue)
      }
      res.render('index',{record, totalAmount})
    })
    .catch(error => console.log(error))
})

module.exports = router