const Category = require("../category");
const db = require("../../config/mongoose");

db.once("open", () => {
  Category.create(
    {
      categoryName: "household",
      categoryIcon: "fas fa-home"
    },
     {
      categoryName: "transportation",
      categoryIcon: "fas fa-shuttle-van"
    },
     {
      categoryName: "entertainment ",
      categoryIcon: "fas fa-grin-beam"
    },
     {
      categoryName: "food",
      categoryIcon: "fas fa-utensils"
    },
     {
      categoryName: "other",
      categoryIcon: "fas fa-pen"
    })
    .then(() => {
      console.log('category done')
      db.close()
    })
})


  