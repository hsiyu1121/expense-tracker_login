//引入模組
const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const record = require('./modules/record')
const filter = require('./modules/filter')

//引入路由模組
router.use('/', home)
router.use('/record', record)
router.use('/filter', filter)

//匯出路由器

module.exports = router
