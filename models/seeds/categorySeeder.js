if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const Category = require("../category");
const db = require("../../config/mongoose");


db.once('open', () => {
  Category.create(
    {
      title: "家居物業",
      icon: "fas fa-home"
    },
    {
      title: "交通出行",
      icon: "fas fa-shuttle-van"
    },
    {
      title: "休閒娛樂",
      icon: "fas fa-grin-beam"
    },
    {
      title: "餐飲食品",
      icon: "fas fa-utensils"
    },
    {
      title: "其他",
      icon: "fas fa-pen"
    })
    .then(() => {
      console.log('categorySeeder done!')
      db.close()
    })
    .catch(err => console.log(err))
})
