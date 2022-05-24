const mongoose = require('mongoose');

const detailsSchema = mongoose.Schema(
    {
        doctor: { type: String, required: true },
        hospital: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true }
    }
);

const Details = mongoose.model('details', detailsSchema);
module.exports = Details;