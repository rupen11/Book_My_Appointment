import React, { useEffect, useState } from 'react'

const Appointments = () => {
    const [appo, setAppo] = useState();
    const getAppointments = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("Please login first");
            return;
        }
        const res = await fetch("/api/appointment/appointment", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "token": token
            }
        });
        const json = await res.json();
        if (res.status === 200) {
            setAppo(json);
        }
        else {
            alert("Something went wrong");
        }
    }

    const cancelAppointment = async (id) => {
        const conf = window.confirm("Do you want to cancel appointment?");
        if (!conf) return;
        const res = await fetch("/api/appointment/cancelAppointment/" + id, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            }
        });
        const json = await res.json();
        if (res.status === 200) {
            getAppointments();
            alert(json);
        }
        else alert(json);
    }

    useEffect(() => {
        getAppointments();
    }, []);

    return (
        <div id="contentPrimary">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        {
                            appo && appo.map((e, index) => {
                                return <div className="meet__box">
                                    <div className="meet__innerprimarybox">
                                        <div className="meet__left">
                                            <h5 className="meet__hostpital">{e.hospital}</h5>
                                            <p className="meet__name">Name: {e.name}</p>
                                            <p className="meet__doctorname">Dr: {e.doctor}</p>
                                        </div>
                                        <div className="meet__right">
                                            <p className="meet__appointmentno">Appointment No: #{e.appointmentid}</p>
                                            <p className="meet__time">Time: {e.time}</p>
                                            <p className="meet__address">Place: {e.address}</p>
                                        </div>
                                    </div>
                                    <div className="meet__innersecondarybox">
                                        <button type="button" className="btn__cancel" onClick={() => cancelAppointment(e._id)}>cancel</button>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appointments