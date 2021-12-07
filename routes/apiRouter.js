const express = require('express');
const usersCtrl = require('../controllers/usersCtrl');


exports.router = (function() {
    const apiRouter = express.Router();
    apiRouter.route('/users').get(usersCtrl.getAllUsers);
    return apiRouter;
})();

module.exports = function(app){
    app.use(function(req,res,next){
        res.header(
            "Acces-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type,Accept"
        );
        next();
    });
    app.post("/api/user/create",function(req,res){
        usersCtrl.create 
    });
    app.put("/api/user/update/:id", function(req,res){
        usersCtrl.update
    });  
    
    app.get("/api/user/findAll", function(req,res){
        usersCtrl.findAll
    }); 

    app.delete("/api/user/delete", function(req,res){
        usersCtrl.delete
    });
}


    

