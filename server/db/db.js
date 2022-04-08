const mongoose = require('mongoose');

mongoose.connect((process.env.DATABASE), (error) => {
    error ? console.log("Something went wrong" + error) : console.log("Connected with database 😃");
});