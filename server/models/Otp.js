const mongoose = require('mongoose');

const otpSchema = mongoose.Schema(
    {
        number: { type: String, required: true, min: 10 },
        otp: { type: String, required: true },
        createdAt: { type: Date, default: Date.now, index: { expires: 600 } }
        // 180 is a second
    },
    { timestamp: true }
);

const Otp = mongoose.model('otps', otpSchema);
module.exports = Otp;