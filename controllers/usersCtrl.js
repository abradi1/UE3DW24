// Pour l'appeler sur le navigateur nous allons définir une route
const models = require('../models');
module.exports = {
    getAllUsers:function(req,res){
        res.status(200).json({"status":200})
    },


     createUser: function (req, res) {
        models.User.create({ firstname: req.body.firstname, lastname: req.body.lastname }
        ).then(function (user) {
        res.status(201).json(user)
        })
        },

update:function(req,res) {
    const id=req.body.id;
    models.User.update(req.body,{
        where : {id:id}
    })
    .then (num => {
        if(num == 1){
            res.json({message: "l'utilisateur a été modifié"});

        }

    });

},

findAllUser:function(req,res){
    models.User.findAll().then(
        data => {
            res.json(data);
        }
    )
    
},

delete:function(req,res) {
    const id = req.body.id;
    models.User.destroy({
        where:{id:id}
    })
    .then(num => {
        if(num == 1)
            res.json({
                message:"utilisateur supprimé"
            });
    });
    
}


};
