const express = require('express');
const router = express.Router();

/**
 * Importing the Publisher Controller file
 */
const PublisherController = require('../controllers/publisher_controller');

/**
 * This is used to return ALL publishers in the DB
 */
router.get('/',PublisherController.get_all_publishers());

/**
 * This is used to post to the DB
 */
router.post('/',PublisherController.add_publisher());

module.exports = router;