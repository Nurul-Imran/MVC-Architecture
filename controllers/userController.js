const path = require('path');
const users = require('../models/usersModel');

const createUserController = (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '../views/index.html'));
}

const saveUserController = (req, res, next) => {
    const {userName, age} = req.body;
    const newUser = {
        name: userName,
        age
    };
    users.push(newUser);
    res.status(201).send({
        success: true,
        message: "User Data Inserted",
        users
    })
}


module.exports = {
    createUserController,
    saveUserController
}