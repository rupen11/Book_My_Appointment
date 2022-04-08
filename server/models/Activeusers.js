const mongoose = require('mongoose');

const activeUserSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    number: { type: String, required: true, unique: true, min: 10 },
    password: { type: String, required: true, min: 4, max: 8 },
});

const ActiveUsers = mongoose.model('activeusers', activeUserSchema);
module.exports = ActiveUsers;