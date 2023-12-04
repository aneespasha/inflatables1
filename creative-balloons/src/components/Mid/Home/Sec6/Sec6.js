import React from "react";
import './Sec6.css';

 function Sec6() {
    return(
        <section className="sec6">
        <div className="innerSec6">
             <div className="mainHeading white"> Tell Us What Are You Looking For ? </div>
             <div className="contact">
                 <div className="detail">
                     <label><input type="detail" id="detail" placeholder="Enter Detail" name="email" /></label>
                 </div>
                 <div className="personDetail disFlex">
                     <label><input type="number" id="number" placeholder="+91" name="number" /></label>
                     <label> <input type="name" id="name" placeholder=" Enter Name" name="name" /></label>
                 </div>

                 <div className="btnPan">
                     <button type="submit">Submit</button>
                 </div>
             </div>
         </div>
    </section>
    );
 }

export default Sec6;


