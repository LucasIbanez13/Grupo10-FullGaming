module.exports = {
    register : (req,res) => {
        return res.render('register')
    },
    login : (req,res) => {
        return res.render('login')
    },

    admin : (req,res) => {
        return res.render("admin")
    }
}