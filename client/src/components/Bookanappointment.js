import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const Bookanappointment = () => {
    const navigate = useNavigate();
    const [details, setDetails] = useState([]);
    const [hospital, setHospital] = useState([]);
    const [doctor, setDoctor] = useState([]);
    const [appointment, setAppointment] = useState({
        name: "", age: "", email: "abc@gmail.com", number: "1234567890", city: "", hospital: "", doctor: "", time: "", address: "Vastral, Ahmedabad", appointmentid: "112271"
    });

    const getDetails = async () => {
        const res = await fetch("/api/appointment/getdetails", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const json = await res.json();
        if (res.status === 200) {
            setDetails(json);
        }
    }

    const handleCity = (e) => setHospital(details.filter((element) => { return element.city === e.target.value }));
    const handleHospital = (e) => setDoctor(details.filter((element) => { return element.hospital === e.target.value }));
    const handleAppointment = (e) => setAppointment({ ...appointment, [e.target.name]: e.target.value });
    const handleDoctor = (e) => {
        // const data = details.filter((element) => { return element.doctor === e.target.value });
        // const address = data[0].address;
        // setAppointment({ ...appointment, address: address });
    }

    const handleTakeAppointment = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        if (!token) {
            alert("Please login first");
            return;
        }
        const res = await fetch("/api/appointment/bookanappointment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "token": token
            },
            body: JSON.stringify(appointment)
        });
        const json = await res.json();
        if (res.status === 200) {
            Swal.fire({
                title: 'Send!',
                text: json,
                icon: 'success',
                confirmButtonText: 'OK'
            });
            navigate("/appointments");
        }
        else {
            Swal.fire({
                title: 'Oops!',
                text: "Something Went Wrong To Take An Appointment",
                icon: 'error',
                confirmButtonText: 'Try Again'
            })
        }
    }

    useEffect(() => {
        getDetails();
    }, []);

    return (
        <>
            {details &&
                <div id="contentForm">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <form className="book__form">
                                    <h4 className="book__heading">Book An Appointment</h4>

                                    <input type="text" name="name" className="book__input" placeholder="Patient Name" onChange={handleAppointment} />

                                    <input type="text" name="age" className="book__input" placeholder="Patient Age" onChange={handleAppointment} />

                                    <select name="city" className="book__input" onChange={(e) => { handleCity(e); handleAppointment(e); }}>
                                        <option value="select" selected disabled>--Select City--</option>
                                        {
                                            details.map((element, index) => {
                                                return <option value={element.city} key={index + 1}>{element.city}</option>
                                            })
                                        }
                                    </select>

                                    <select name="hospital" className="book__input" onChange={(e) => { handleHospital(e); handleAppointment(e); }}>
                                        <option value="" selected disabled>--Select Hospital--</option>
                                        {
                                            hospital.map((element, index) => {
                                                return <option value={element.hospital} key={index + 1}>{element.hospital}</option>
                                            })
                                        }
                                    </select>

                                    <select name="doctor" className="book__input" onChange={(e) => { handleDoctor(e); handleAppointment(e); }}>
                                        <option value="" selected disabled>--Select Doctor--</option>
                                        {
                                            doctor.map((element, index) => {
                                                return <option value={element.doctor} key={index + 1}>{element.doctor}</option>
                                            })
                                        }
                                    </select>

                                    <label className="book__label">Select Time</label>
                                    <input type="time" name="time" className="book__input" placeholder="Select Time" onChange={handleAppointment} />

                                    <button type="submit" className="btn__book" onClick={handleTakeAppointment}>Take An Appointment</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            }
        </>
    )
}

export default Bookanappointment