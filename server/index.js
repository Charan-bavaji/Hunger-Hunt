//Requires!
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require('./routes/userRoute');

// Port
const PORT = process.env.PORT || 8080;

// middleware
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.send('welcome to the Hunger Hunts🍖');
})
app.use('/api', userRoutes);


// Server
app.listen(PORT, () => {
    console.log(`Server is working on http://localhost:${PORT}`);
});










// process.on method is used to handle a eventlistner,
// in case unhandledRejection log is message before shutting down;
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    console.log("shutting down the server due to the unhandled promise Rejection")
})