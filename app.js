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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.set("view engine", "hbs");
app.use(routes)
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));



app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`);
});
