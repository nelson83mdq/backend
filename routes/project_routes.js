'uses strict'

var express_ = require('express');
var projectController = require('../controlers/project_cntrl');
var router_api = express_.Router();

// declaro connect-multiparty
let multiparty = require('connect-multiparty');
//declaro donde quiero guardar los archivos que se van a PushSubscription.
let uploadMiddleware = multiparty({uploadDir: './uploads'})
//------------------------------------------------------------------------

router_api.get('/home', projectController.home);
router_api.post('/test', projectController.test);
router_api.post('/save', projectController.saveProject);
router_api.get('/project/:id?', projectController.getProject);
router_api.get('/projects', projectController.getProjects);
router_api.put('/project/:id', projectController.updateProject);
router_api.delete('/project/:id', projectController.deleteProject);
// cargar imagenes
router_api.post('/upload-image/:id', uploadMiddleware, projectController.uploadImage);

module.exports = router_api;