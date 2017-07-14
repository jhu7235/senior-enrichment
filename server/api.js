'use strict';

const api = require('express').Router();
const Campus = require('../db/models').Campus;
const Student = require('../db/models').Student;

//
// student api start
api.post('/students', (req, res, next) => {
	const student = Student.build({ name: req.body.student, campusId: req.body.campusId})
	.save().then( res.send() )
	.catch( next );
});

api.get('/students', (req, res, next) => {
	Student.findAll()
		.then( students => res.json(students))
		.catch( next );

});

api.get('/students/:studentId', (req, res, next) => {
	Student.findOne({where: {id: req.params.studentId}})
		.then( res.json )
		.catch( next );
});

api.delete('/students/:studentId', (req, res, next) => {
	// console.log('API DELETE STUDENT');
	Student.destroy({where: {id: req.params.studentId}})
		.then( res.sendStatus(200) )
		.catch( next );
});


//
// campus api start
api.get('/campuses', (req, res, next) => {
	Campus.findAll()
		.then( campuses => res.json(campuses) )
		.catch( next );
});

api.post('/campuses/add', (req, res, next) => {
	console.log('CAMPUS ADD API', req.body);
	Campus.create({name: req.body.campusInfo.campusName, imageUrl: req.body.campusInfo.imageUrl})
		.then( campus => {
			console.log(campus)
			res.json(campus)
		})
		.catch( next );
});

api.delete('/campuses/:id', (req, res, next) => {
	Campus.findById(req.params.id)
		.then( campus => campus.destroy() )
		.then( res.status(200).send(`campus ${req.params.id} erased` ) )
		.catch( next );
});

//get campus students
api.get('/campuses/:campusId', (req, res, next) => {
	const campusId = req.params.campusId;
	const campus = Campus.findById(campusId)
		.then( campus => campus.getStudents() )
		.then( students => {
			// console.log('CAMPUS STUDENT API', students);
			res.json(students);
		})
		.catch( next );
});


module.exports = api;
