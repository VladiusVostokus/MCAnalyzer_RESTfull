'use strict';

const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router
    .route('/')
    .get(userController.Get)
    .post(userController.Create)

router
    .route('/:userId')
    .get(userController.getUser)
    .post(userController.createUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;
