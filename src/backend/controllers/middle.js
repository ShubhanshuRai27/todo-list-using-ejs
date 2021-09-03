const redirectprofile = (req, res, next) => {
    if (req.session.userId) {
      res.redirect("/");
    } else {
      next();
    }
  };
  

module.exports={
    RedirectToProfile: redirectprofile
}