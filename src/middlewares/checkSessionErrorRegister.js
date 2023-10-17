module.exports = (req,res,next) => {
    if (req.session.errorsRegister) {
        res.locals.errorsRegister = req.session.errorsRegister
        delete req.session.errorsRegister
    }
    if (req.session.old) {
        res.locals.old = req.session.old;
        delete req.session.old;
    }
    next();
}