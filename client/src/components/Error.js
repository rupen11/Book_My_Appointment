import React from 'react'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div id="error__container">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error__content">
                            <h3 className='error__heading'>404 not found</h3>
                            <div className="errorImage__container">
                                <img src="images/error.svg" alt="Error Image" className='error__image' />
                            </div>
                            <p className="error__info">page you found either in constuction or not found</p>
                            <button type='button' className="btn__back"><Link to="/">back to home</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error