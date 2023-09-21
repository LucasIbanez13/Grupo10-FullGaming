const fs = require("fs");
const path = require("path");
const{products, userRead}= require("./controllerHome")
const {validationResult} =require("express-validator");
const user = require("../data/user");

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

            const users = userRead;
            const newuser = new user(req.body);

            users.push(newuser);

            const rutadata = path.join(__dirname, "../data");
            const filepath = path.join(rutadata, "user.json");

            fs.writeFileSync(filepath, JSON.stringify(users, null, 2));

            return res.redirect("/#");
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
            const user = userRead.find(user => user.email === req.body.email2);
            const {email2, remember} = req.body
            
            const {id,image, name,rol,email} = user;

            req.session.userLogin = {
                image,
                name,
                rol,
                email,
                id

            }
            
            remember !== undefined && res.cookie("fullgaming20", req.session.userLogin,{
                maxAge : 1000 * 60 * 60 * 24 * 7
            })
            return res.redirect("/#")

        }
    },

    admin : (req,res) => {
        const products = JSON.parse(fs.readFileSync(path.join(__dirname, "../data", "items.json"), "utf-8"));
        return res.render("admin",{
            products,
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
            res.render('profile', {
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