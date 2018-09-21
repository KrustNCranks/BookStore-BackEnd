const express = require('express');
const router = express.Router();

/**
 * Importing the Author Controller file
 */
const AuthorController = require('../controllers/author_controller');

/**
 * This is used to return ALL Authors in the DB
 */
router.get('/',AuthorController.get_all_authors);

/**
 * This is used to post to the DB
 */
router.post('/',AuthorController.add_author);

module.exports = router;