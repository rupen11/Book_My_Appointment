const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
        name: { type: String, required: true },
        age: { type: String, required: true },
        doctor: { type: String, required: true },
        hospital: { type: String, required: true },
        email: { type: String, required: true },
        time: { type: String, required: true },
        appointmentid: { type: String, required: true, unique: true },
        number: { type: String, required: true, min: 10 },
        address: { type: String, required: true },
    },
    { timestamp: true }
);

const Appointment = mongoose.model('appointments', appointmentSchema);
module.exports = Appointment;