import React from 'react'

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <p className="footerPara">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem porro aut architecto. Dicta
                                alias distinctio soluta veniam facilis tempore iusto rerum sed consequatur, repudiandae
                                temporibus perferendis. Doloremque quibusdam eius sit officia totam adipisci harum. Iste
                                assumenda quae alias consequatur, perferendis earum distinctio voluptatum labore soluta ipsam,
                                quasi commodi facere odit.
                            </p>
                            <div className="footerImage">
                                <img src="images/logo.png" alt="logo" className="footerLogo" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h5 className="footerHeading">Quick Links</h5>
                            <ul>
                                <li><a href="">Home</a></li>
                                <li><a href="">Book An Appointment</a></li>
                                <li><a href="">My Appointment</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5 className="footerHeading">Features</h5>
                            <ul>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <footer id="footerSec">
                <p className="footerSecPara"><strong>Book An Appointment</strong> 2022 &copy;CopyRight | All Rights Resevred</p>
            </footer>
        </>
    )
}

export default Footer