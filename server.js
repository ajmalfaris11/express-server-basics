// Import the express module
const express = require('express');
// Initialize an express application
const app = new express();

// Import the API routes from the 'api' module located in the 'routes' folder
const api = require('./routes/api');
// Import the admin routes from the 'admin' module located in the 'routes' folder
const admin = require('./routes/admin');
const contact = require('./routes/contact')
const about = require('./routes/about')


// Define a middleware function named 'logger' that logs a message and calls 'next' to pass control to the next middleware or route handler
const logger = (req, res, next) => {
    console.log('Middleware here'); // Log a message to indicate middleware execution
    next(); // Move to the next middleware/route handler
};



// Define a route for the root URL ('/') that uses the 'logger' middleware
// This route sends a "hello world" response to the client
app.get('/', logger, (req, res) => {
    res.send('hello world'); // Respond with "hello world" when the root URL is accessed
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

// Use the imported API routes under the '/api' path prefix
app.use('/admin', admin);

app.use('/contact', contact);

app.use('/about',about)



// Start the server and listen on port 3256
app.listen(3256, () => {
    console.log('Server is running at port 3256');
});

// Note: nodemon has been installed for automatic server restarts on file changes
