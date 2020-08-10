const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

router.get('/', (req, res) => {
  Category.find()
    .lean()
    .then(categories => {
      res.render('index', {categories} )
    })
})



module.exports = router