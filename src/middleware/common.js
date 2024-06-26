function checkUser(req, res, next) {
  if (req.session.email) {
    next();
  } else {
    res.redirect('/registrarion');
  }
}

function secureRoute(req, res, next) {
  if (!req.session.email) {
    next();
  } else {
    res.redirect('/');
  }
}

module.exports = { checkUser, secureRoute };