const express = require('express');
const router = express.Router();

/**
 * Importing the Genre Controller file
 */
const GenreController = require('../controllers/genre_controller');

/**
 * This is used to return ALL genres in the DB
 */
router.get('/',GenreController.get_all_genres);

/**
 * This is used to post to the DB
 */
router.post('/',GenreController.add_genre);

module.exports = router;