// Pour l'appeler sur le navigateur nous allons définir une route
module.exports = {
    getAllUsers:function(req,res){
        res.status(200).json({"status":200})
    }
};

exports.create = (req,res)=>{
    const user ={
        firstname:req.body.firstname,
        lastname:req.body.lastname
    }

    models.User.create(user)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || " Une erreur lors de la création "
        });
    })
}

exports.update =(req,res) => {
    const id=req.body.id;
    models.User.update(req.body,{
        where : {id:id}
    })
    .then (num => {
        if(num == 1){
            res.send({message: "l'utilisateur a été modifié"});

        }
        else{
            res.send({message:"l'utilisateur n'a pas été modifié"});
        }

    })
    .catch (err => {
        res.status(500).send({
            message:"erreur de mise a jour"
        })
    })

}

exports.findAll=(req,res)=>{
    models.User.findAll().then(
        data => {
            res.send(data);
        }
    )
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "une erreure"
        });
    })
}


exports.delete=(req,res) =>{
    const id = req.body.id;
    models.User.delete({
        where:{id:id}
    })
    .then(num => {
        if(num == 1){
            res.send({
                message:"utilisateur supprimé"
            });
        }
        else{
            res.send({
                message:"utilisateur non supprimé"
            });
        }
    })
    
}
