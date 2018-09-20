const express = require('express');
const router = express.Router();

/**
 * Importing the Books Controller file
 */
const BookController = require('../controllers/books_controller');

/**
 * This is used to return ALL books in the DB
 */
router.get('/',BookController.get_all_books);

/**
 * This is used to post to the DB
 */
router.post('/',BookController.post_book);

module.exports = router;