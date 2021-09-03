const dbConn = require("../databases/sqlite.js");
const users = dbConn.users;
//const Sequelize = require("sequelize");

function signup(req, res)
{
    const { name, email, password } = req.body;
    if(!(name && email && password)){
        return res.render("profile", {
            msg:"please fill all details"
        });
    }
    else
    {
        users.create({
            name,
            email,
            password
        }).then(user=>{
                        req.session.userId = user.id;
                        req.session.userName = user.name;
                        req.session.userEmail = user.email;
            if(user)
            {
                return res.redirect("/");
            }
        }).catch(err=>{
            if(err)
            {
                return res.redirect("/");
            }
        })

    }
}

module.exports={
    signup: signup
}