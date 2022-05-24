import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const Login = () => {
    const navigate = useNavigate();
    const [userCredential, setUserCredential] = useState({
        number: "",
        otp: ""
    });

    const userData = (e) => {
        setUserCredential({ ...userCredential, [e.target.name]: e.target.value });
    }

    const handleOtp = async (e) => {
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

    const handleVerify = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userCredential)
        })

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
        <div id="login__container">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="login_content">
                            <h1 className="login__heading">book my appointment</h1>
                            <p className="login__para">feel better with us</p>
                            <p className="login__info">If you are new at here then register from here. <Link to="/signup">Register
                                Here</Link></p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form className="login__form">
                            <input type="text" name="number" className="login__input" placeholder="Contact Number"
                                required="required" onChange={userData} />

                            <input type="text" name="otp" className="login__input" placeholder="Type OTP Here"
                                required="required" onChange={userData} />

                            <p className="login__resend">Resend OTP</p>

                            <button className="login__btn" onClick={handleVerify}>Verify</button>
                            <button className="login__btn" onClick={handleOtp}>Send OTP</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login