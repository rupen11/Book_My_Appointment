const router = require('express').Router();
const Users = require('../models/users');
const authentication = require('../middleware/authentication');
const Appointment = require('../models/Appointments');

router.post('/bookanappointment', authentication, async (req, res) => {
    try {
        const user = await Users.findOne({ number: req.number });
        if (!user) return res.status("User Not Registered");

        const createBooking = new Appointment({
            user: req.id,
            name: req.body.name,
            email: req.body.email,
            doctor: req.body.doctor,
            hospital: req.body.hospital,
            time: req.body.time,
            appointmentid: req.body.appointmentid,
            number: req.body.number,
            address: req.body.address
        });
        const saveBooking = await createBooking.save();

        if (!saveBooking) return res.status(400).json("Appointment Booking Failed");

        return res.status(200).json("Appointment Confirmed");
    }

    catch (error) {
        return res.status(400).json(error);
    }
});

router.get('/appointment', authentication, async (req, res) => {
    try {
        const appointment = await Appointment.find({ user: req.id });
        if (!appointment) return res.status(400).json("No Any Appointment Found");

        res.status(200).json(appointment);
    }

    catch (error) {
        return res.status(400).json(error);
    }
});

module.exports = router;