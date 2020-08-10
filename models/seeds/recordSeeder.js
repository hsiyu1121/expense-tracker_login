const Record = require('../record')
const db = require('../../config/mongoose')

db.once("open", () => {
    Record.create(
    {
      name: '午餐',
      category: '餐飲食品', 
      date: '2019/04/23', 
      amount: 60
    },
    {
      name: '晚餐',
      category: '餐飲食品', 
      date: '2019/04/23', 
      amount: 60
    },
    {
      name: '捷運',
      category: '交通出行', 
      date: '2019/04/23', 
      amount: 120
    },
    {
      name: '電影: 驚奇隊長',
      category: '休閒娛樂', 
      date: '2019/04/23', 
      amount: 60
    },
    {
      name: '租金',
      category: '家居物業', 
      date: '2019/04/01', 
      amount: 25000
    })
    .then(() => {
      db.close();
      console.log('record done.')
    })
    .catch(error => console.log(error))  
});

