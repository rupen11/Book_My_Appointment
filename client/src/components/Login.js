import React from 'react'

const Login = () => {
    return (
        <div id="login__container">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="login_content">
                            <h1 className="login__heading">book my appointment</h1>
                            <p className="login__para">feel better with us</p>
                            <p className="login__info">If you are new at here then register from here. <a href="">Register
                                Here</a></p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form className="login__form">
                            <input type="text" name="number" className="login__input" placeholder="Contact Number"
                                required="required" />

                            <input type="text" name="otp" className="login__input" placeholder="Type OTP Here"
                                required="required" />

                            <p className="login__resend">Resend OTP</p>

                            <button className="login__btn">Verify</button>
                            <button className="login__btn">Send OTP</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login