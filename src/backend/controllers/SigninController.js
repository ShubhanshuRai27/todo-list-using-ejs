const dbConn = require("../databases/sqlite");
const users = dbConn.users;
const Sequelize = require("sequelize");

function signin(req, res)
{
    const { email, password }= req.body;
    
    if(email && password)
    {
        users.findOne({
            where:Sequelize.and({
                email: email,
                password: password
            })
        }).then(user=>{
                        req.session.userId = user.id;
                        req.session.userName = user.name;
                        req.session.userEmail = user.email;
            if(user)
            {
                return res.redirect("/")
            }
        }).catch((err)=>{
            if(err){
                return res.redirect("/");
            }
        })
    }
    else
    {
        console.log("please provide/check email or password");
        return res.redirect("/signin");
    }
}

module.exports={
    signin: signin
}

