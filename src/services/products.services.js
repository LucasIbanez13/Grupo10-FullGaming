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
}

module.exports = {
    getAllProducts
}