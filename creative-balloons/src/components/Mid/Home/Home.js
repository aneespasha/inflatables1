import React from 'react';
import Sec2 from './Sec2/Sec2';
import Sec3 from './Sec3/Sec3';
import Sec4 from './Sec4/Sec4';
import Sec5 from './Sec5/Sec5';
import Sec6 from './Sec6/Sec6';
import './Home.css'

function Home(params) {
    return(
<div>
<div className="Home" id="HOME">
    <Sec2 />
    <Sec3 />
    <Sec4 />
    <Sec5 />
    <Sec6 />
    </div>
</div>
    );
}

export default Home;