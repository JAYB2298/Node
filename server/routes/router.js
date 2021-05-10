const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/** 
 *  @description Root Route
 *  @method GET 
 */
route.get('/', services.homeRoutes);

/*
 *  @description add task
 *  @method GET /add-task
 */
route.get('/add-task', services.add_task)

/*
 *  @description for update user
 *  @method GET /update-user
 */
route.get('/update-task', services.update_task)


// API
route.post('/api/task', controller.create);
route.get('/api/tasks', controller.find);
route.put('/api/tasks/:id', controller.update);
route.delete('/api/tasks/:id', controller.delete);


module.exports = route