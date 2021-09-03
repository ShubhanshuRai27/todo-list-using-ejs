const Sequelize = require("sequelize");
const sequelize = new Sequelize({
      dialect: "sqlite",
      storage: __dirname + "/database.sqlite"
});

const users = sequelize.define("users",{
    
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }

});

const lists = sequelize.define("lists",{

    item: {
        type: Sequelize.STRING,
        allowNull: false
    },
    edit: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    done: { 
        type: Sequelize.STRING,
        allowNull: false
    },
    user_id: {
        type: Sequelize.NUMBER,
        allowNull: false
    }
});

sequelize.sync().then(()=>{
    console.log('table created, if one does not exist');
}).catch((err)=>{
    console.log(err);
})

module.exports= {
    users: users,
    lists: lists
};
