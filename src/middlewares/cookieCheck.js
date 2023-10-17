module.exports = (req, res, next) => {
    if (req.cookies.fullgaming20) {
        req.session.userLogin = req.cookies.fullgaming20
    }

    next()
}