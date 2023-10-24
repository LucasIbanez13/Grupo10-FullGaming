const db = require("../../database/models")

module.exports = {
    remove: (req, res) => {
      const productId = req.params.id;
  
      
      db.Image.destroy({
        where: { productId: productId }
      })
        .then(() => {
          
          db.Product.destroy({
            where: { id: productId }
          })
            .then(() => {
              res.redirect("/users/admin");
            })
            .catch((error) =>
              console.error("error al eliminar producto:", error));
        })
        .catch((error) =>
          console.error("error al eliminar las imagenes:", error));
    }
  };