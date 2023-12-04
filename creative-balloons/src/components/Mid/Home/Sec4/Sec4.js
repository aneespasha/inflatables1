import React from "react";
import './Sec4.css';
import Pictures from "../../../Pic";
import { Link } from "react-router-dom";

function Sec4() {
    return(
        <section className="fourColoumnSec4">
                    <div className="innerSec4">
                        <div className="mainHeading">Advertising <span className="primary">Balloons and Inflatable
                                Characters</span>
                        </div>
                        <div className="row">
                            <div className="column txtStrt">
                            <img src={Pictures.sec4.img2} classNameName='logo' alt='' />
                                <a href="Advertising Balloons">Advertising Balloons</a>
                                <button>
                                <Link to="/AboutUs" id="btn2">VIEW MORE</Link>
                            </button>

                            </div>
                            <div className="column">
                            <img src={Pictures.sec4.img2} classNameName='logo' alt='' />
                                <a href="Sky Balloons">Sky Balloons</a>
                                <button>
                                <Link to="/AboutUs" id="btn2">VIEW MORE</Link>
                            </button>
                            </div>
                            <div className="column">
                            <img src={Pictures.sec4.img3} classNameName='logo' alt='' />
                                <a href="Advertising Sky Balloons">Advertising Sky Balloons</a>
                                <button>
                                <Link to="/AboutUs" id="btn2">VIEW MORE</Link>
                            </button>
                            </div>
                            <div className="column">
                            <img src={Pictures.sec4.img4} classNameName='logo' alt='' />
                                <a href="Inflatable Slide Bouncy"> Inflatable Slide Bouncy</a>
                                <div className="center">
                                <button>
                                <Link to="/AboutUs" id="btn2">VIEW MORE</Link>
                            </button>
                            </div>
                            </div>
                        </div>

                    </div>
                </section>
    )
}
export default Sec4;