import React from 'react'
import './facts.css'
import right from '../images/aarushrightside.png'
import left from '../images/aarushleftside.png'
import top from '../images/aarushtop.png'
import oursolarcar from'../images/oursolarcar3dheader.png'

function Facts() {
    
    return(
        <div className='facts'>
            <img src={oursolarcar} className='carheading'/>
            <p className='intro'>Born at India's top engineering college, IIT Madras, Team Agnirath is proud to introduce Aarush, our pioneering solar car. Named after "the first ray of sunrise," it represents a remarkable fusion of innovative engineering and sustainable technology. It’s optimized for speed and performance, making it ready to participate in the most prestigious solar challenges worldwide.</p>
            <div className='leftimg'>
                <img src={left} />
                <p>-Monocoque carbon fibre chassis<br />
                -Axial flux motor with 98% efficiency</p>
            </div>
            <div className='rightimg'>
                <img src={right} />
                <p>-Designed our own solar panels with 30% more efficiency than commercial solar panels</p>
            </div>
            <div className='leftimg'>
                <img src={top} />
                <p>-Unique 3 wheel design for more stability<br />
                -Custom built battery pack</p>
            </div>
        </div>
    );
};

export default Facts;
    