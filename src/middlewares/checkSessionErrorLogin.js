module.exports = (req,res,next) => {
    if (req.session.errorsLogin) {
        res.locals.errorsLogin = req.session.errorsLogin
        delete req.session.errorsLogin
    }
    if (req.session.old) {
        res.locals.old = req.session.old;
        delete req.session.old;
    }
    next();
}