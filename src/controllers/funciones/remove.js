const db = require("../../database/models");
const fs = require("fs");
const path = require("path");

module.exports = {
  remove: async (req, res) => {
    const productId = req.params.id;

    try {
      
      await db.Image.destroy({
        where: { productId: productId }
      });

      
      const product = await db.Product.findByPk(productId);

      if (product && product.image) {
        //aca vamos a construir la ruta de la ubicacion donde se alojan las imagenes
        const imagePath = path.join(__dirname, "../../../public/img", product.image);

        // Aquí implementamos la lógica para eliminar el archivo en imagePath
        fs.unlink(imagePath, (error) => {
          if (error) {
            console.error("**********************Error al eliminar la imagen principal:", error);
          } else {
            console.log("****************************8Imagen principal eliminada correctamente.");
          }
        });
      }

      
      await db.Product.destroy({
        where: { id: productId }
      });

      res.redirect("/users/admin");
    } catch (error) {
      console.error("Error al eliminar producto o imágenes:", error);
      
    }
  }
};
