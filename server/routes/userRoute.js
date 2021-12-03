const express = require('express');
const UserRouter = express.Router();
const { UserController } = require( './../controllers/userController' );

UserRouter
    .route( '/loginUser' )
    .post( UserController.userLogin );

UserRouter
    .route('/adduser')
    .post(UserController.createUser);





module.exports = { UserRouter }