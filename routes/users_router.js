const express = require('express');
const router = express.Router();

/**
 * Importing the User Controller file
 */
const UserController = require('../controllers/users_controller');

/**
 * This is used to return ALL users in the DB
 */
router.get('/',UserController.get_all_users);

/**
 * This is used to post to the DB
 */
router.post('/',UserController.create_user);

module.exports = router;