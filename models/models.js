const { Localbase } = require("localbase");

const db = new Localbase("autoMech");

module.exports = createProduct = () => {
  console.log("Product created...");
  db.collection("products")
    .add({
      _id: 1,
      name: "Glue",
    })
    .then(() => {
      db.collection("products").get();
    });
};
