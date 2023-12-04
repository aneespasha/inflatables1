import React from "react";
import { Link } from "react-router-dom";
import './Sec3.css'

function Sec3() {
    return (
        <section className="twoColoumnsec3">
            <div className="innerSec3">
                <div className="textPan1 white-bg">
                    <div className="subHeading txtctr">Our Mission</div>
                    <p className="para">"Our mission is to spread joy and creativity through our beautiful balloon
                        artistry. We are dedicated to crafting innovative and imaginative balloon designs that not only
                        bring smiles but also ignite creativity. Our goal is to uplift spirits, spark celebration,
                        and create unforgettable memories with every creation. We are committed to pushing the
                        boundaries of balloon art and adding a touch of magic to every occasion, sharing happiness
                        one balloon at a time."</p>
                    <div className="center">
                            <button>
                                <Link to="/AboutUs" id="btn2">KNOW MORE</Link>
                            </button>
                    </div>
                </div>
                <div className="textPan2 primary-bg">
                    <div className="subHeading txtctr">Team of Experts</div>
                    <p className="para">" Our success in this domain is attributed to our dedicated team
                        members who put in untiring efforts to offer our clients a quality range of inflatable
                        products. We owe it to their expertise and in-depth knowledge in their respective field,
                        which enables us to meet the bulk requirements of our clients. They are also well-versed
                        in the ever-changing trends of the market and manufacture products accordingly,
                        which helps us attain client satisfaction."
                    </p>
                    <div className="center">
                            <button>
                                <Link to="/AboutUs" id="btn2">KNOW MORE</Link>
                            </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sec3;