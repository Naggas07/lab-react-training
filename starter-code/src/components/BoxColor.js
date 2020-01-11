import React from 'react';
import '../styles/BoxColor.css'

const BoxColor = ({r,g,b}) => {
    return ( 
        <div className="colorRectangle" style={{background: `rgb(${r}, ${g}, ${b})`}}>
            <p>rgb({r}, {g}, {b})</p>
            <p>#{r.toString(16)}{g.toString(16)}{b.toString(16)}</p>
        </div>
     );
}
 
export default BoxColor;