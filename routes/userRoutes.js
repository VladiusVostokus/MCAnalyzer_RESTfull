'use strict';

const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/', userController.Get);
router.post('/',userController.Create);
router.get('/:userId', userController.getUser);
router.post('/:userId', userController.createUser);
router.patch('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);

module.exports = router;
