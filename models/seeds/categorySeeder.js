const Category = require("../category");
const db = require("../../config/mongoose");


db.once("open", () => {
  const category = ['餐飲食品','交通出行','休閒娛樂','家居物業','其他']
  for(let i = 0; i < category.length; i++){
    Category.create({category : category[i]})
      .then(() => {
        console.log('category done')
        db.close()
      })
      .catch(error => console.log(error))
  }
})
