const express = require('express');
const router = express.Router();

const { createUserController, saveUserController } = require('../controllers/userController');

//Create User Route
router.get('/create-user', createUserController);

//Save User Route 
router.post('/', saveUserController);




module.exports = router;