import React from 'react';
import '../styles/Random.css'

const Random = ({min, max}) => {
    const random = Math.floor((Math.random() * (max -min)) + min)
    return ( 
        <div className="randomRow">
            <p>Random value between {min} and {max} => {random}</p>
        </div>
     );
}
 
export default Random;