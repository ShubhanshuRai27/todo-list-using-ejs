
let profile=(req, res)=>{
    res.render("profile", { username: req.session.name });
}

let signin=(req, res)=>{
    res.render("sign-in");
}

let signup=(req, res)=>{
    res.render("signup");
}

let signout=(req, res)=>{
    req.session.destroy();
    res.redirect("/signin");
}

module.exports={
    profile: profile,
    signin: signin,
    signup: signup,
    signout: signout
}