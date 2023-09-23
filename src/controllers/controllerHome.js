const fs = require("fs");
const path = require("path");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


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

const products = jsonarchivos["items.json"]
const marcas = jsonarchivos["marcas.json"]
const categories = jsonarchivos["categories.json"]
const userRead = jsonarchivos["user.json"]



module.exports = {
    products,
    userRead,

    home : (req,res) => {

        return res.render('home',{
            products,
            marcas,
            categories,
            toThousand
    
            
        })
    },
    
    search : (req,res) => {
            const keywords = req.query.keywords
            
            const results = products.filter(item => 
                item.name.includes(keywords))
                
            
            
                return res.render("results",{
                results,
                keywords,
                toThousand
        })
    }
    
}