const db = require("../../database/models")
const sequelize = db.sequelize;
const { getAllProducts } = require('../../services/products.services')
const paginate = require('express-paginate')


module.exports = {
    list: async(req,res) =>{
        try{
            const {products,total} = await getAllProducts(req.query.limit,req.skip);
            const pagesCount = Math.ceil(total / req.query.limit);
            const currentPage = req.query.page;
            const pages = paginate.getArrayPages(req)(pagesCount,pagesCount,currentPage)

            return res.status(200).json({
                ok:true,
                meta : {
                    total,
                    pagesCount,
                    currentPage,
                    pages
                },
                data : products
            })
    
        } catch (error){
            return res.status (error.status|| 500).json({
                ok:false,
                msg:error.message || "Ups, parece que hubo un error"
            })
        }
}

}