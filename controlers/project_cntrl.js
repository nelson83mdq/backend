'use strict'


var projectModel = require('../models/projects');

var controller = {
//
    home: function(req, res){
        return res.status(200).send({
            message: 'home page'
        });

    }, 

    test: function(req, res){
        return res.status(200).send({
            message: 'metodo de test ejecutado'
        });
    },

    saveProject: function(req, res){
        var project = new projectModel();
        
        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.lang = params.lang;
        project.image = null;
        
        /* //deprecated
        project.save((err, projectStored) => {
            if (err) return res.status(500).send({message: 'Error al guardar documento.'});

            if (!projectStored) return res.status(404).send({message:'No se pudo guardar el proyecto'});

            return res.status(200).send({project: projectStored});
        });
        */

        try{
            let projectStored = project.save();
            console.log('guardado completo');
            return res.status(200).send({project: projectStored});
        } catch (err){
            return res.status(500).send({message: 'Error al guardar documento.'});
        }

        // deberia de identificar como solucionar el projectStored no este vacio. 
        // ya que reenvia el json guardado en mongo
    },

    getProject: function(req, res){

        var projectId = req.params['id'];
        if (projectId == null) res.status(500).send({
            messaje: 'debe ingresar un id'
        })
       
        let query = projectModel.findById(projectId);
        //console.log('query executed', projectId)

        query.then((doc)=>{
            if (doc==null) {
                return res.status(404).send({
                    message: 'no se encuentra el recurso'
                })
            }
            //----------------------------------------
            res.status(200).send({
                project: doc
                })
            }).catch((err)=>{
                console.log('error: ', err);
            })
        }

};

module.exports = controller;