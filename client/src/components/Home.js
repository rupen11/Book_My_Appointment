import React from 'react'

const Home = () => {
    return (
        <>
            <div id="imageSlider">
                <div className="slider">
                    <img src="images/slideimg.jpg" alt="" />
                </div>
            </div>
            <div id="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="featuresHeading">Features</h1>
                            <ul className="features">
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, delectus.</li>
                                <li>Lorem ipsum dolor sit.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                            </ul>
                            <button className="btnDirect">book my appointment</button>
                        </div>
                        <div className="col-md-6">
                            <div className="imageContainer">
                                <img src="images/slideimg4.jpg" alt="image1" className="infoImage" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home