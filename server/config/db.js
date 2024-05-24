const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        console.log('Mongo URI:', process.env.MONGO_URI);
        await mongoose.connect('mongodb+srv://hgrhunt07:SQWi5gpZLO3kjHfS@cluster0.xbgsawx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        );
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
    }
};
module.exports = connectDB;