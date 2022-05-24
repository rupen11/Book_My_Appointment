import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const Signup = () => {
    const navigate = useNavigate();

    const [userCredential, setUserCredential] = useState({
        name: "",
        email: "",
        password: "",
        number: "",
        otp: ""
    });

    const userData = (e) => {
        setUserCredential({ ...userCredential, [e.target.name]: e.target.value });
    }

    const handleOtpMan = async (e) => {
        e.preventDefault();
        console.log(userCredential.number);
        const res = await fetch("/api/auth/sendotp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ number: userCredential.number })
        });

        const json = await res.json();
        if (res.status === 200) {
            Swal.fire({
                title: 'Send!',
                text: json,
                icon: 'success',
                confirmButtonText: 'OK'
            })
        }
        else {
            Swal.fire({
                title: 'Oops!',
                text: 'Something Went Wrong',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
    }

    const handleVerfiy = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userCredential)
        })

        console.log(res);
        const json = await res.json();
        if (res.status === 200) {
            localStorage.setItem("token", json.token);
            Swal.fire({
                title: 'Yeyyy!',
                text: json.message,
                icon: 'success',
                confirmButtonText: 'GO There!'
            })
            navigate("/");
        }
        else {
            Swal.fire({
                title: 'Oops!',
                text: 'Something Went Wrong',
                icon: 'error',
                confirmButtonText: 'Try Again'
            })
        }
    }

    return (
        <div id="signup__container">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="signup_content">
                            <h1 className="signup__heading">book my appointment</h1>
                            <p className="signup__para">feel better with us</p>
                            <p className="signup__info">if you are already and user then login from here. <Link to="/login">Login
                                Here</Link></p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form className="signup__form">
                            <input type="text" name="name" className="signup__input" placeholder="Your Name"
                                required="required" onChange={userData} />

                            <input type="email" name="email" className="signup__input" placeholder="Email Address"
                                required="required" onChange={userData} />

                            <input type="pasword" name="password" className="signup__input" placeholder="Set Password"
                                required="required" onChange={userData} />

                            <input type="text" name="number" className="signup__input" placeholder="Contact Number"
                                required="required" onChange={userData} />

                            <input type="text" name="otp" className="signup__input" placeholder="Type OTP Here"
                                required="required" onChange={userData} />

                            <button className="signup__btn" onClick={handleVerfiy}>Verify</button>
                            <button className="signup__btn" onClick={handleOtpMan}>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup