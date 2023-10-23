const { hashSync } = require('bcryptjs');
const db = require('../database/models')
const {validationResult} =require("express-validator");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

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
                rolId : 1
                
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
                    return res.redirect("/#")
                })
                .catch (error => console.log(error))
            

            

        }
    },

    admin : (req,res) => {
        const products = JSON.parse(fs.readFileSync(path.join(__dirname, "../data", "items.json"), "utf-8"));
        return res.render("admin",{
            products,
            toThousand
        })
    },
    nose : (req,res) => {
        return res.render("nose")
    },
    profile : (req,res) => {
        const profileId = req.params.id;
        const profile = userRead.find(profile => profile.id == profileId);
    
        if (!profile) {
            return res.status(404).send('Perfil no encontrado');
        }
            return res.render('profile', {
            profile: profile
        });
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