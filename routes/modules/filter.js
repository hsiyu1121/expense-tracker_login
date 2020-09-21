const express = require("express");
const router = express.Router();
const Record = require("../../models/record");
const Category = require("../../models/category");
const Handlebars = require('handlebars')

Handlebars.registerHelper('isEqual', (category, value, options) => {
  if (category === value) {
    return options.fn(this)
  } else {
    return options.inverse(this)
  }
})

router.get('/', (req, res) => {
  // const userId = req.user._id
  let totalAmount = 0
  const title = req.query.sort
  const month = req.query.month
  const months = []
  const expenseList = 0
  let dataList = {}

  if (title === 'all') {
    dataList = { date: { $regex: month } }
  } else if (title === 'all') {
    dataList = { category: title }
  } else {
    dataList = { $and: [{ category: title }, { date: { $regex: month } }] }
  }

  Record.find({ })
    .lean()
    .then(records => {
      records.forEach(record => {
        const date = record.date.slice(0, 7)
        if (!months.includes(date)) {
          months.push(date)
        }
      })

      Record.find(dataList)
        .lean()
        .sort({ date: 'desc' })
        .then(records => {
             
          if( records.length !== 0){
            totalAmount = records.map(record => record.amount).reduce((a, b) => a + b)
          }
      
          Category.find()
            .lean()
            .sort({ _id: 'asc' })
            .then(categories => res.render('index', { records, categories, month, months, totalAmount }))
            .catch(error => console.log(error))
        })
    })
    .catch(error => console.log(error))
})

module.exports = router
