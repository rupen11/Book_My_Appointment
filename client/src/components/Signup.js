import React from 'react'

const Signup = () => {
    return (
        <div id="signup__container">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="signup_content">
                            <h1 className="signup__heading">book my appointment</h1>
                            <p className="signup__para">feel better with us</p>
                            <p className="signup__info">if you are already and user then login from here. <a href="">Login
                                Here</a></p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form className="signup__form">
                            <input type="text" name="name" className="signup__input" placeholder="Your Name"
                                required="required" />

                            <input type="email" name="email" className="signup__input" placeholder="Email Address"
                                required="required" />

                            <input type="password" name="password" className="signup__input" placeholder="Set Password"
                                required="required" />

                            <input type="text" name="number" className="signup__input" placeholder="Contact Number"
                                required="required" />

                            <input type="text" name="otp" className="signup__input" placeholder="Type OTP Here"
                                required="required" />

                            <button className="signup__btn">Verify</button>
                            <button className="signup__btn">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup