// Import the express module
const express = require('express');

// Initialize an express application
const app = new express();

// Import the API routes from the 'api' module located in the 'routes' folder
const api = require('./routes/api');



// Define a route for the root URL ('/') that sends a "hello world" response
app.get('/', (req, res) => {
    res.send('hello world');
});



// Define a route for '/Products' that sends a welcome message for the Products page
app.get('/Products', (req, res) => {
    res.send('Hello, Welcome to the Products Page');
});

// Define a route for '/Products/:id' to handle requests for a specific product by its ID
app.get('/Products/:id', (req, res) => {
    let value = req.params; // Get route parameters (e.g., product ID)
    console.log(value); // Log the parameters to the console for debugging
    res.send(`Hello, Welcome to the Product Page`);
});



// Use the imported API routes under the '/api' path prefix
app.use('/api', api);


// Start the server and listen on port 3256
app.listen(3256, () => {
    console.log('Server is running at port 3256');
});

// Note: nodemon has been installed for automatic server restarts on file changes
