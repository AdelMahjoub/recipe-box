import React from 'react';

export default function({name, handleClick,index}){
    return(
        <li
        data-toggle="collapse"
        data-target={`#details${index}`}
        className="recipe-name list-group-item list-group-item-info"
        >
        {name}
        </li>
    )
}