
const db = require('../../database/models')
const sequelize = db.sequelize
const { getAllUsers, getUserDetail } = require('../../services/users.services')
const paginate = require('express-paginate')

module.exports = {
    listUser : async(req,res) =>{
        try{
            const {users,total} = await getAllUsers(req.query.limit,req.skip);
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
                data : users
            })
    
        } catch (error){
            return res.status (error.status|| 500).json({
                ok:false,
                msg:error.message || "Ups, parece que hubo un error"
            })
        }
    },
    userDetail : async(req,res) =>{
        try{
            const {userId}= await getUserDetail(req.params.id)
            return res.status(200).json({
                ok:true,
                data: userId
            })
        }
        catch(error){
            return res.status (error.status || 500).json ({
                ok:false,
                msg : error.message || "ups, parece que no hay detalle de usuarios :("
            })
        }
    }
}