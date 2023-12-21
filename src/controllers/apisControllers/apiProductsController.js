const db = require("../../database/models")
const sequelize = db.sequelize;
const { getAllProducts,getproductDetail } = require('../../services/products.services')
const paginate = require('express-paginate');



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
                    pages,
                },
                data : products
            })
    
        } catch (error){
            return res.status (error.status|| 500).json({
                ok:false,
                msg:error.message || "Ups, parece que hubo un error"
            })
        }
},
    detail : async(req,res) =>{
        try{
            const {productId} = await getproductDetail(req.params.id)

            return res.status(200).json({
                ok:true,
                data : productId
            })

        }
        catch(error){
            return res.status (error.status|| 500).json({
                ok : false,
                msg: error.message || "Ups, no se no se encontraron detalles"
            })
        }
    },
    create: async(req,res)=>{
        try{
            const {category,name,brand,model,amount,description,price}= req.body;

            const {id} = await db.Product.create(

              {
                category,
                name: name,
                brandId: brand,
                model,
                amount,
                description,
                price,
                /* image:req.files[0].filename */
            },
            {
                attributes : {
                exclude : ['createdAt','updatedAt','genreId','brandId']
            }
            });
            const product= await db.Product.findByPk(id,{
                include : ["brand","category"/* ,"image" */]
            });
            /* product.image = `${req.protocol}://${req.get('host')}/img/${product.image}` */


            return res.status(200).json({
                ok: true,
                msg: "El producto fue creado con éxito",
                data: product,
              });
        }
        catch(error){
            return res.status(error.status|| 500).json({
                ok: false,
                msg: error.message || 'Ups! no se encontro el producto'
            })
            
        }
    },
    update : async(req,res)=>{
        try{
            const {name,categoryId,brandId,model,description,price,discount} = req.body;
            const product = await db.Product.findByPk(req.params.id,{
                include : ["brand","category"]
            });

            await db.Product.update(
                {
                    name : name,
                    categoryId,
                    brandId,
                    model,
                    description : description,
                    price,
                    discount : discount || 0
                },
                {
                    where: {
                        id: req.params.id,
                    }
                }
            )
            product.reload();

            return res.status(200).json({
                ok: true,
                msg : "el producto fue actializado con exito",
                data: product
            })
        }
        catch(error){
            return res.status(error.status|| 500).json({
                ok:false,
                msg: error.message 
            })

        }
    },
    
    destroy: async(req,res)=>{
        try {
            await db.Product.destroy({
              where: {
                id: req.params.id,
              },
            });
        
            return res.status(200).json({
              ok: true,
              msg: "El producto fue eliminado con éxito",
              data: null,
            });
          } catch (error) {
            return res.status(error.status || 500).json({
              ok: false,
              msg: error.message || "Upss, hubo un error",
              data: null,
            });
          }
    }
   
    

}