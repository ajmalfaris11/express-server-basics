// Import the express module
const express = require('express');

// Create a new router object to handle routes for this module
const router = express.Router();

// Define a route for the root path ('/') within this router that sends an initial page response
router.get('/', (req, res) => {
    res.send('initial page');
});

// Define a route for '/second' within this router that sends a second page response
router.get('/second', (req, res) => {
    res.send('second page');
});

// Export the router to make it accessible in other parts of the application
module.exports = router;
