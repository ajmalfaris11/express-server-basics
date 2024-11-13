// Import the express module
const express = require('express');

// Create a new router object to handle routes for this module
const router = express.Router();

// Import the path module to handle file paths
const path = require('path')

// Define a route for the root path ('/') within this router
router.get("/", (req, res) => {
    // Log the path to the index.html file for debugging
    console.log(path.join(__dirname, '../index.html'))

    // Send the contact.html file as the response
    res.sendFile(path.join(__dirname, '../contact.html'))
})

// Export the router to make it accessible in other parts of the application
module.exports = router;
