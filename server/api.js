'use strict';
import Sequelize from 'sequelize';
const api = require('express').Router();
const db = require('../db');
const Campus = db.Campus

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}));

//campus api start
api.get('/campus', (req, res, next) => {
	db.Campus.findAll()
	.then( campuses => res.JSON(campuses) );
});
module.exports = api;
