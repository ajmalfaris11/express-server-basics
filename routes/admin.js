// Import the express module
const express = require('express');

// Create a new router object to handle routes for this module
const router = express.Router();

router.get('/', (req, res) => {
    res.send('this is admin initial page');
});

router.get("/second", (req,res)=>{
    res.send('this is admin second page')
})

// Export the router to make it accessible in other parts of the application
module.exports = router;