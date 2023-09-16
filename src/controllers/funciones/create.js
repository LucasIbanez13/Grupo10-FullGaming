const fs = require("fs")
const {products,userRead}= require("../controllerHome")

module.exports = {
    create : (req,res) => {
        const user = userRead.find(user => user.rol);          
            const {rol} = user;

            req.session.userLogin = {
                rol,
            }
        return res.render('productCreate',{
            ...products
        })
    }
}
