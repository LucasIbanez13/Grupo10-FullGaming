const db = require('../database/models')
const sequelize = db.sequelize;

const getAllProducts = async(limit,offset) => {
    try {
         const products = await db.Product.findAll({
            limit,
            offset,
            attributes : {
                exclude : ['createdAt','updatedAt','genreId','brandId']
            },
            where : undefined,
            include : [
                {
                    association : 'brand',
                    attributes : ['id','name']
                },
                {
                    association : 'category',
                    attributes : ['id','name']
                }
            ]
        })

        const total = await db.Product.count()

        return {
            products,
            total
        }
    }
    catch(error){
        console.log(error)
    }
};

const getproductDetail = async(productId) =>{
    try{
        const product = await db.Product.findByPk(productId,{
            attributes : {
                exclude : ['createdAt','updatedAt','categoryId','brandId']
            },
            include : [
                {
                    association : 'brand',
                    attributes : ['id','name']
                },
                {
                    association : 'category',
                    attributes : ['id','name']
                }
            ] 
        })
        return {productId : product};

    } catch(error){
        console.log(error)
    }

}
const createProduct = async(req,res)=>{

}

module.exports = {
    getAllProducts,
    getproductDetail
}