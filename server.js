// Import the express module
const express = require('express');

// Initialize an express application
const app = new express();


// Define a route for the root URL ('/') that sends a "hello world" response
app.get('/', (req, res) => {
    res.send('hello world');
});



// Start the server and listen on port 3256
app.listen(3256, () => {
    console.log('Server is running at port 3256');
});

// Note: nodemon has been installed for automatic server restarts on file changes
