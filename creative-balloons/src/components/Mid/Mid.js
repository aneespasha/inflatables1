import React from "react";
import Home from "./Home/Home";
import AboutUs from './AboutUs/AboutUs'
import Contact from "./Contact/Contact";
import Products from "./Products/Products";

function Mid() {
    return(
        <div className="Mid">
            <Home />
            <AboutUs />
            <Products />
            <Contact />
        </div>
    );
}
export default Mid;