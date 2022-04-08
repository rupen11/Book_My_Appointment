const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    number: { type: String, required: true, unique: true, min: 10 },
    password: { type: String, required: true, min: 4, max: 8 },
});

usersSchema.methods.generateJWT = function () {
    const token = jwt.sign({
        _id: this._id,
        number: this.number
    }, process.env.SECRET_KEY, { expiresIn: '7d' });
    return token;
}

const Users = mongoose.model('users', usersSchema);
module.exports = Users;