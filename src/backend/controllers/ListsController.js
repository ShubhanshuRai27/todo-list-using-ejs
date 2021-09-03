const dbConn = require("../databases/sqlite");
const users = dbConn.users;
const lists = dbConn.lists;

let displayLists =(req, res)=>{
    if(req.session.userId)
    {
        lists.findAll({
            where:{
                user_id: req.session.userId
            }
        }).then((data)=>{
            res.render("profile", { username: req.session.userName, lists: data});
        }).catch((err)=>{
            res.redirect("/signin");
        })
    }
    else
    {
        res.redirect("/signin");
    }
}

let addItem=(req, res)=>{
    const task = req.body.item;
    if(!task)
    {
        return res.redirect("/");
    }
    else{
        var id = req.session.userId;
        lists.create({
            item: task,
            edit: false,
            done: 'no',
            user_id: id
        }).then((list)=>{
            if(list)
            {
                res.redirect("/");
            }
        }).catch((err)=>{
            if(err)
            {
                res.redirect("/");
            }
        })
    }
}

let editItem=(req, res)=>{
    var task_id = req.body.taskId;
    var edited_task = req.body.editedTask;

    lists.findOne({
        where :{
            id: task_id
        }
    }).then((list)=>{
        console.log(list);
        //to check if list is present by writting it on console.
        list.item = edited_task;
        list.edit = true
        list.save();
        res.redirect("/");
    }).catch((err)=>{
        console.log(err);
        res.redirect("/");
    })
}

let deleteItem=(req, res)=>{
    var task_id = req.body.taskID

    lists.destroy({
        where :{
            id: task_id
        }
    }).then(()=>{
        console.log('deleted list no '+ task_id);
        res.redirect("/");
    }).catch((err)=>{
        console.log(err)
        res.redirect("/");
    })
}

module.exports = {
   displayLists: displayLists,
   addItem: addItem,
   editItem: editItem,
   deleteItem: deleteItem
}