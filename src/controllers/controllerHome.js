const fs = require("fs");
const path = require("path");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../database/models')
const { Op } = require('sequelize');



const rutadata = path.join(__dirname, "../data");
const archivos = fs.readdirSync(rutadata);

const jsonarchivos = {};

archivos.forEach(archivo =>{
     
    if (path.extname(archivo) === ".json") {
        const rutasjson = path.join(rutadata, archivo);
        const leerjson = fs.readFileSync(rutasjson, "utf-8");
        try {
            jsonarchivos[archivo] = JSON.parse(leerjson);
        } catch (error) {
            console.error(`Error parsing JSON file ${archivo}: ${error.message}`);
        }
    } 
    
})




module.exports = {
    home: (req, res) => {

        Promise.all([
            db.Brand.findAll(),
            db.Category.findAll(),
            db.Product.findAll({include: ["image"]}),
            db.Image.findAll()
        ])
        .then(function([marca, categorias, productos,image]) {
            console.log("Imágenes:", image);
            res.render('home', {
                productos,
                marca,
                categorias,
                toThousand,
                image
            });
        })
        .catch(error => console.log(error));
    },
    
    search: (req, res) => {
        const keywords = req.query.keywords.toLowerCase();
    
        db.Product.findAll({
            where: {
                name: {
                    [Op.like]: `%${keywords}%`
                }
            }
        })
        .then(products => {
            return res.render("results", {
                results: products,
                keywords,
                toThousand
            });
        })
        .catch(error => console.log(error));
    }
    
}