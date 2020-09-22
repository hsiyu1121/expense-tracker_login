if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const Record = require('./models/record')
const Category = require('./models/category')
const Handlebars = require('handlebars')
const routes = require('./routes')
require('./config/mongoose')
const session = require('express-session')
const usePassport = require('./config/passport')
const flash = require('connect-flash')


Handlebars.registerHelper('isEqual', (category, value, options) => {
  if (category === value) {
    return options.fn(this)
  } else {
    return options.inverse(this)
  }
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.set("view engine", "hbs");

app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false, 
  saveUninitialized: true
}))

usePassport(app)
app.use(flash())
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  res.locals.success_msg = req.flash('success_msg')
  res.locals.warning_msg = req.flash('warning_msg')
  next()
})

app.use(routes)
app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`);
});
