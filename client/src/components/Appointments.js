import React from 'react'

const Appointments = () => {
    return (
        <div id="contentPrimary">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="meet__box">
                            <div className="meet__innerprimarybox">
                                <div className="meet__left">
                                    <h5 className="meet__hostpital">Shaishav Hospital</h5>
                                    <p className="meet__name">Name: Jarsaniya Rupenkumar R.</p>
                                    <p className="meet__doctorname">Dr: Parthiv Shah</p>
                                </div>
                                <div className="meet__right">
                                    <p className="meet__appointmentno">Appointment No: #5</p>
                                    <p className="meet__time">Time: 3:00 PM</p>
                                    <p className="meet__address">Place: Vastral, Ahmedabad</p>
                                </div>
                            </div>
                            <div className="meet__innersecondarybox">
                                <button type="button" className="btn__cancel">cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appointments