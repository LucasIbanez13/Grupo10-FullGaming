const db = require('../database/models')

getAllUsers = async(limit,ofset)=>{
    try{
        const users = await db.User.findAll({
            limit,
            ofset,
            attributes : {
                exclude : ['createdAt','updatedAt','rolId' ]
            }
        })
    const total = await db.User.count()
    return {
        users,
        total
    }
    }
    catch(error){
        console.log(error)
    }
};

getUserDetail = async(userId) =>{
    try{
        const user = await db.User.findByPk(userId,{
            attributes : {
                exclude : ['createdAt','updatedAt','rolId' ]
            }
        })
        return {
            userId : user
        }
    }
    
    catch(error){
        console.log(error)
    }
}
module.exports = {
    getAllUsers,
    getUserDetail
}