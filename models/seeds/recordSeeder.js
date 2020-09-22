if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const Record = require('../record')
const db = require('../../config/mongoose')
const User = require('../user')
const bcrypt = require('bcryptjs')


const SEED_USER = {
  name: 'root', 
  email: 'root@example.com',
  password: '12345678'
}

const SEED_RECORD = [
   {
      name: '午餐',
      category: '餐飲食品', 
      date: '2020-04-23', 
      amount: 60,
      merchant:'7-11'
    },
    {
      name: '晚餐',
      category: '餐飲食品', 
      date: '2020-04-23', 
      amount: 60,
      merchant:'7-11'
    },
    {
      name: '捷運',
      category: '交通出行', 
      date: '2020-05-23', 
      amount: 120,
      merchant:'北捷'
    },
    {
      name: '電影: 驚奇隊長',
      category: '休閒娛樂', 
      date: '2020-04-23', 
      amount: 60,
      merchant:'星橋電影院'
    },
    {
      name: '租金',
      category: '家居物業', 
      date: '2020-04-01', 
      amount: 25000,
      merchant:'房東'
    }
]

db.once('open', () => {
    bcrypt
      .genSalt(10)
      .then(salt => bcrypt.hash(SEED_USER.password, salt))
      .then(hash => User.create({
          name: SEED_USER.name,
          email: SEED_USER.email,
          password: hash
      }))
      .then(user => {
        const userId = user._id
        return Promise.all(Array.from(
          { length: 5 },
          (_, i) =>
            Record.create({
              name: SEED_RECORD[i].name,
              category: SEED_RECORD[i].category,
              date: SEED_RECORD[i].date,
              amount: SEED_RECORD[i].amount,
              merchant: SEED_RECORD[i].merchant,
              userId
            })
        ))
      })
      .then(() => {
        console.log('recordSeeder done!')
        process.exit()
      })
      .catch(error => console.log('error'))
})
