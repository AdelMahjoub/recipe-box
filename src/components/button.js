import React from 'react';

export default function({handleClick, color, glyphType, btnIndex, usage}){
    return(
        <button id={btnIndex} className={color} onClick={handleClick} title={usage}>
            <span className={glyphType}></span>
        </button>
    )
}