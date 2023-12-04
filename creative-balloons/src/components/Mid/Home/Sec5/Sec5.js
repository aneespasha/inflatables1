import React from "react";
import './Sec5';

function Sec5() {
    return (
        <section className="sec5">
            <div className="innerSec5">
                <div className="heading primary">Product videos</div>
                <div className="videos center">
                    <div className="videosSec">
                        <iframe width="350" height="200"
                            src="https://www.youtube.com/embed/QGAMTlI6XxY?si=gC_UpiqZsidAYZIj"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>
                        <div className="txt">The iframe element</div>
                        <button type="submit" className="btn2">Submit</button>

                    </div>
                    <div className="videosSec">
                        <iframe width="350" height="200"
                            src="https://www.youtube.com/embed/QGAMTlI6XxY?si=gC_UpiqZsidAYZIj"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>
                        <div className="txt">The iframe element</div>
                        <button type="submit" className="btn2">Submit</button>
                    </div>

                    <div className="videosSec">
                        <iframe width="350" height="200"
                            src="https://www.youtube.com/embed/QGAMTlI6XxY?si=gC_UpiqZsidAYZIj"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>
                        <div className="txt"> The iframe element</div>
                        <button type="submit" className="btn2">Submit</button>
                    </div>

                </div>
                <div className="btnPan disBlock">
                    <button type="submit" className="btn disBlock">Watch more videos</button>
                </div>
            </div>
        </section>
    )
}
export default Sec5;