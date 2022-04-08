import React from 'react'

const Bookanappointment = () => {
    return (
        <div id="contentForm">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form className="book__form">
                            <h4 className="book__heading">Book An Appointment</h4>

                            <input type="text" name="name" className="book__input" placeholder="Patient Name" />

                            <input type="text" name="age" className="book__input" placeholder="Patient Age" />

                            <select name="city" className="book__input">
                                <option value="" selected disabled>--Select City--</option>
                                <option value="Ahmedabad">Ahmedabad</option>
                                <option value="Rajkot">Rajkot</option>
                                <option value="Surat">Surat</option>
                                <option value="Vadodara">Vadodara</option>
                            </select>

                            <select name="hospital" className="book__input">
                                <option value="" selected disabled>--Select Hospital--</option>
                                <option value="Shaishav Hospital">Shaishav Hospital</option>
                                <option value="Narnarayan Hospital">Narnarayan Hospital</option>
                                <option value="MB Multispecialist Hospital">MB Multispecialist Hospital</option>
                                <option value="Anupam Hospital">Anupam Hospital</option>
                            </select>

                            <select name="doctor" className="book__input">
                                <option value="" selected disabled>--Select Doctor--</option>
                                <option value="Parthiv Shah">Parthiv Shah</option>
                                <option value="Ankit Dabhi">Ankit Dabhi</option>
                                <option value="Kinal Suthar">Kinal Suthar</option>
                                <option value="Pratham Kansara">Pratham Kansara</option>
                            </select>

                            <label className="book__label">Select Time</label>
                            <input type="time" name="time" className="book__input" placeholder="Select Time" />

                            <button type="submit" className="btn__book">Take An Appointment</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bookanappointment