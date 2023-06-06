'uses strict'

var express_ = require('express');
var projectController = require('../controlers/project_cntrl');
var router_api = express_.Router();

router_api.get('/home', projectController.home);
router_api.post('/test', projectController.test);
router_api.post('/save', projectController.saveProject);
router_api.get('/project/:id?', projectController.getProject);

module.exports = router_api;