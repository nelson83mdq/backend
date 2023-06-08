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
            //este metodo puede mejorarse
        },

        getProjects: function(req, res){
            /*projectModel.find().exec((err, projects) =>{
                if (err) return res.status(500).send({message: 'error al devolver datos'});
                if(!projects) return res.status(404).send({message:'no hay projectos listados'});
                return res.status(200).send({ projects });
            })*/
            projectModel.find()
                .then((projects)=>{
                    console.log('then..../n');
                    if (!projects) return res.status(404).send({message:'No se encontraron projectos en el servidor'});
                    return res.status(200).send({projects});
                })
                .catch((err)=>{
                    console.log('cathc...../n')
                    return res.status(500).send({message:'Error al devolver los datos'})
                })
        },

        updateProject: function(req, res){
            let projectId = req.params['id'];
            let update = req.body;
            //console.log('update: ',update,'/n');
            projectModel.findByIdAndUpdate(projectId, update)
                .then((projectUpdated)=>{
                    if(!projectUpdated) return res.status(404).send({message:'No se puede realizar la accion'});
                    return res.status(200).send({project:projectUpdated});
                })
                .catch((err)=>{
                    //console.log('error update: ',err,'/n');
                    return res.status(500).send({message:'Ocurrio un error, ver la consola'});
                })
        },
};

module.exports = controller;