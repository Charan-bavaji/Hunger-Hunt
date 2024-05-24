//Requires!
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const authRoutes = require('./routes/authRouter');
const connectDB = require('./config/db');
// Db
connectDB();
// Port
const PORT = process.env.PORT || 3000;
console.log(process.env.PORT)
// middleware
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.send('welcome to the Hunger Hunts🍖');
})
app.use('/api', authRoutes);


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