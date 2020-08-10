const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('/new', (req, res) => {
  const {name, date, category, amount} = req.body
  
  return Record.create(req.body)
    .then(() => {
      res.redirect('/')
    })
    .catch(error => console.log(error))
})



module.exports = router