const express = require('express');
const routes = express.Router();
const studentController = require('../controller/studentController')


// --------------------------post students---------------------------- 
routes.post('/addStudent', studentController.addStudent);


// --------------------------get students----------------------------
routes.get('/getStudent', studentController.getStudent);

// --------------------------update students----------------------------
routes.put('/putStudent/:id', studentController.putStudent);

// --------------------------patch students----------------------------
routes.patch('/patchStudent/:id', studentController.patchStudent);

// --------------------------delete students----------------------------
routes.delete('/deleteStudent/:id', studentController.deleteStudent);

module.exports= routes;