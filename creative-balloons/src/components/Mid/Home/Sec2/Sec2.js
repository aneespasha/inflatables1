// import Images from '../Pic';
import React from 'react'; 
import Pictures from '../../../Pic';
import { Link } from 'react-router-dom';
import './Sec2.css'
function Sec2() {
    return(
        <section className="sec2">
                    <div className="innerSec2">
                        <div className="mainHeading dark center">About&nbsp;<span className="primary">Ganesh Sky Balloon</span>
                        </div>
                        <div className="details">
                            <ul>
                                <li>
                                <img src={Pictures.sec2.img1} className='logo' alt='' />
                                    <div className="txtPan">
                                        <h4>Nature of Business</h4>
                                        <p>Exporter and Manufacturer</p>
                                    </div>
                                </li>
                                
                                
                                <li>
                                <img src={Pictures.sec2.img2} className='logo' alt='' />
                                    <div className="txtPan">
                                        <h4>Annual Turnover</h4>
                                        <p>Rs. 1 - 2 Crore</p>
                                    </div>
                                </li>
                                <li>
                                <img src={Pictures.sec2.img3} className='logo' alt='' />
                                    <div className="txtPan">
                                        <h4>Total Number of Employees</h4>
                                        <p>11 to 25 People</p>
                                    </div>
                                </li>
                                <li>
                                <img src={Pictures.sec2.img4} className='logo' alt='' />
                                    <div className="txtPan">
                                        <h4>GST No.</h4>
                                        <p>07ASUPS1475R1ZI</p>
                                    </div>
                                </li>
                                <li>
                                <img src={Pictures.sec2.img5} className='logo' alt='' />
                                    <div className="txtPan">
                                        <h4>Year of Establishment</h4>
                                        <p>1997</p>
                                    </div>
                                    </li>
                                <li>
                                <img src={Pictures.sec2.img6} className='logo' alt='' />
                                    <div className="txtPan">
                                        <h4>Import Export Code (IEC)</h4>
                                        <p>05130****</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <p className="para">We, Ganesh Sky Balloon, are one of the trusted organizations engaged in
                            manufacturing and
                            supplying
                            a supreme quality range of Inflatable Characters, Advertising Balloons and other Products,
                            since
                            1997.
                            Our product range includes Advertising Air Dancers, Hot air Shape Sky Balloons, Airship Sky
                            Balloons,
                            Back Pack Balloons, Android Walking Balloons and Hanuman ji Walking Inflatable. Moreover, we
                            offer
                            Inflatable Arches, Inflatable Slide Bouncy, VIP Pizza</p>
                        <div className='center'>
                            <button id='btn1'>
                                <Link to="/AboutUs" > KNOW MORE</Link>
                            </button>
                    </div>
                    </div>
                </section>
        );
}
export default Sec2;