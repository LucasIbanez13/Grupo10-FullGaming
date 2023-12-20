const db= require('../../database/models')



module.exports = {
    update : (req,res) => {
        const productId = req.params.id;
        const {name, category,brand,model,description,price,discount} = req.body
        db.Product.update({
            name,
            category,
            brand,
            model,
            description,
            price,
            discount

        },
            {
            where : { id: productId}
        }
        )
        .then(()=>{
            return res.redirect('/users/admin')
        })

        .catch((error)=>{
            console.log(error)
        })
        
    }
}