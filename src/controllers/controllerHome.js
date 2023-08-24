const fs = require("fs");
const path = require("path");


const rutadata = path.join(__dirname, "../data");
const archivos = fs.readdirSync(rutadata);

const jsonarchivos = {};

archivos.forEach(archivo =>{
     
    const rutasjson = path.join(rutadata,archivo);
    const leerjson = fs.readFileSync(rutasjson, "utf-8");
    jsonarchivos[archivo] = JSON.parse(leerjson); 
    
})

const products = jsonarchivos["items.json"]
const marcas = jsonarchivos["marcas.json"]



module.exports = {
    products,

    home : (req,res) => {
        return res.render('home',{
            products,
            marcas
        })
    },
    
    search : (req,res) => {
            const keywords = req.query.keywords
            
            const results = products.filter(item => 
                item.name.includes(keywords))
                
            
            
                return res.render("results",{
                results,
                keywords
        })
    }
    
}