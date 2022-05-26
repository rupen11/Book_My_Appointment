const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const otpgenerator = require('otp-generator');
const fasttosms = require('fast-two-sms');
const authentication = require('../middleware/authentication');
const Otp = require('../models/otp');
const Users = require('../models/users');

router.post('/sendotp', [
    // Authentication using express-validator
    body('number')
        .isLength({ min: 10, max: 10 })
        .withMessage("Number have must be 10 digits")
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ "Error": errors.array() });

        const OTP = otpgenerator.generate(6, {
            digits: true, lowerCaseAlphabets: false, specialChars: false, upperCaseAlphabets: false
        });

        // const messageSend = await fasttosms.sendMessage({
        //     authorization: process.env.API_KEY,
        //     message: `${OTP} is your One-Time-Password. Only Valid For 10 Minutes. Please Do Not Share Anyone.`,
        //     numbers: [req.body.number]
        // });

        // if (!messageSend.return) return res.status(400).json(messageSend);

        console.log(OTP);

        const otp = new Otp({
            number: req.body.number,
            otp: OTP
        });

        const salt = await bcrypt.genSalt(10);
        otp.otp = await bcrypt.hash(otp.otp, salt);

        await otp.save();
        return res.status(200).json('Otp send');
    }

    catch (error) {
        return res.status(400).json(error);
    }
});

router.post('/signup', [
    // Authentication using express-validator
    body('number')
        .isLength({ min: 10, max: 10 })
        .withMessage("Number have must be 10 digits"),
    body('email')
        .isEmail()
        .withMessage("Email must be validated"),
    body('password')
        .isLength({ min: 4, max: 8 })
        .withMessage("Password must be length between 4 to 8")
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ "Error": errors.array() });

        const user = await Users.findOne({ number: req.body.number });
        if (user) return res.status(400).json('User Already Registered');

        const otpHolder = await Otp.find({ number: req.body.number });
        if (otpHolder.length === 0) return res.status(400).json("OTP Expire");

        const rightOtp = otpHolder[otpHolder.length - 1];

        const validUser = await bcrypt.compare(req.body.otp, rightOtp.otp);

        if (rightOtp.number === req.body.number && validUser) {
            const user = new Users({
                name: req.body.name,
                number: req.body.number,
                email: req.body.email,
                password: req.body.password
            }); //Generat id automatic
            const token = user.generateJWT();
            const result = await user.save();

            await Otp.deleteMany({ number: rightOtp.number });

            return res.status(200).json({
                message: "Register Successfull",
                token: token,
                data: result
            });
        }
    }

    catch (error) {
        return res.status(400).json(error);
    }
});

router.post("/login", [
    // Authentication using express-validator
    body('number')
        .isLength({ min: 10, max: 10 })
        .withMessage("Number have must be 10 digits"),
    body('otp')
        .isLength({ min: 6, max: 6 })
        .withMessage("Otp have must be 6 digits")
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ "Error": errors.array() });

        const otpHolder = await Otp.find({ number: req.body.number });
        if (otpHolder.length === 0) return res.status(400).json("OTP Expire");

        const rightOtp = otpHolder[otpHolder.length - 1];

        const validUser = await bcrypt.compare(req.body.otp, rightOtp.otp);

        if (rightOtp.number === req.body.number && validUser) {
            const user = await Users.findOne({ number: req.body.number });
            if (!user) return res.status("User Not Registered");

            const token = user.generateJWT();

            await Otp.deleteMany({ number: rightOtp.number });

            return res.status(200).json({
                message: "Login Successfull",
                token: token,
                data: user
            });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(400).json(error);
    }
});

router.get("/getuser", authentication, async (req, res) => {
    try {
        const user = await Users.findOne({ _id: req.id });
        if (!user) return res.status(400).json("User Not Found");
        return res.status(200).json(user);
    }

    catch (error) {
        console.log(error);
    }
})

module.exports = router;