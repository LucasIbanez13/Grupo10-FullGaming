const { hashSync } = require('bcryptjs');
const db = require('../database/models')
const {validationResult} =require("express-validator");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const API = 'https://apis.datos.gob.ar/georef/api';
const fetch = require('node-fetch') 
const paginate = require('express-paginate')

module.exports = {
    register : (req,res) => {
        return res.render('partials/register')
    },
    
    processregister : (req,res) => {
        const  errors = validationResult(req);
        const {viewError} = req.query;

        if (!errors.isEmpty()) {
            req.session.errorsRegister = errors.mapped();
            req.session.old = { ...req.body };
            res.redirect(viewError);
            return
        } else{

            
            const {name, email, pass} = req.body;

            db.User.create({
                name : name.trim(),
                email : email,
                password : hashSync(pass,10),
                rolId : 2
                
        })
            .then(user => {
                return res.redirect("/#");
            })
            .catch(error => console.log(error))

            
        }
    },
    login : (req,res) => {
        return res.render('partials/login')
    },

    
    processLogin: (req,res) => {
        const errors = validationResult(req);
        const {viewError2} = req.query

        if (!errors.isEmpty()) {
            req.session.errorsLogin = errors.mapped()
            res.redirect(viewError2);
            return 
            
        }else{

            const {email2, remember} = req.body


            db.User.findOne({
                where : {
                    email : email2
                }
            })
                .then(user => {
                    req.session.userLogin = {
                        image : user.image,
                        name : user.name,
                        rol : user.rolId,
                        email : user.email,
                        id : user.id
        
                    }
                    
                    remember !== undefined && res.cookie("fullgaming20", req.session.userLogin,{
                        maxAge : 1000 * 60 * 60 * 24 * 7
                    })
                    /*return res.redirect("/#")*/
                    /*para aqui lo muevo*/
                     console.log("este es" + user.id)

                     db.Order.findOne({
                        where : {
                            userId : user.id,
                            statusId : 1,
                        },
                        include : [
                            {
                                association : 'carts',
                                include: {
                                    association : 'product',
                                }
                            }
                        ],
                    }).then(order => {
                        if(order){
                            req.session.cart = {
                                orderId : order.id,
                                products : order.carts.map(({ quantity, product: {id,name,image,price,discount}}) => {
                                    return {
                                        id,
                                        name,
                                        image,
                                        price,
                                        discount,
                                        quantity,
                                    }
                                }),
                                total : order.carts.map(cart => cart.product.price * cart.quantity).reduce((a,b) =>  a+b,0)
                            }
                            console.log(req.session.cart)
                            return res.redirect("/#")
                        } else {
                            db.Order.create({
                                total : 0,
                                userId : user.id,
                                statusId  : 1
                            }).then(order => {
                                req.session.cart = {
                                    orderId : order.id,
                                    total : 0,
                                    products : []
                                }
                            })
                            return res.redirect("/#")
                        }
    
                    })

                })
                .catch (error => console.log(error))
                /*carrito*/

                
            

        }
    },

    admin : async (req, res) => {
        const limit = parseInt(req.query.limit, 10) || 10;
        try {
          const [productos,categories,brands] = await Promise.all([
            db.Product.findAndCountAll({
            include : ["category","brand"],
            limit: req.query.limit,
            offset:req.skip
          }),
          db.Category.findAll({
            order:['name']
          }),
          db.Brand.findAll({
            order : ['name']
          })
            ]);
          const users = await db.User.findAll();
          const roles = await db.Rol.findAll();

          const pagesCount = Math.ceil(productos.count / req.query.limit)
          const currentPage = req.query.page;
          
          return res.render("admin", {
            pagesCount,
            currentPage,
            paginate,
            pages: paginate.getArrayPages(req)(pagesCount, pagesCount, req.query.page),
            productos : productos.rows,
            categories,
            brands,
            users,
            toThousand,
            roles,
            limit:limit// revisa esto
            
          });
        }catch (error) {
          console.log(error);
        }
    },

    updateRol : async (req, res) => {
        const userId = req.params.id;
        const nuevoRolId = req.body.rolId; // Asegúrate de que el formulario use 'name="role"'
        
        console.log('userId:', userId);
        console.log('nuevoRolId:', nuevoRolId);



        try {
          // Aquí utiliza Sequelize para actualizar el rol del usuario en la base de datos
          await db.User.update({ rolId: nuevoRolId }, { where: { id: userId } });
      
          res.redirect('/users/admin#modal-user'); // Redirige a la página adecuada después de la actualización
        } catch (error) {
          console.error(error);
          // Maneja los errores según tus necesidades
        }
    },
      
    nose : (req,res) => {
        return res.render("nose")
    },
    profile : async (req,res) => {
        const profile = await db.User.findByPk(req.params.id);
    if (!profile) {
    return res.status(404).send('Perfil no encontrado');
    } else {
    return res.render('profile', { 
        profile
    });
}
    },
    logout: (req, res) => {
        if (!req.session.userLogin.remember) {
            req.session.destroy((error) => {
                if (error) {
                    console.error('Error al cerrar sesión:', error);
                }
                res.clearCookie('fullgaming20');
                res.redirect('/#');
            });
        } else {
            res.redirect('/#');
        }
    }
    
}