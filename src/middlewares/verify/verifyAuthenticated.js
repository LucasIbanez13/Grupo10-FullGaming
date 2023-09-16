
function isAuthenticated(req, res, next) {
  if (req.session.userLogin) {
    next()
}else {
    return res.redirect("/#modal")
}
  }
  
  module.exports = {
    isAuthenticated
  };