import React from 'react';

function details(e){
    if(e.target.nextElementSibling.classList.contains("hidden")){
        e.target.nextElementSibling.classList.remove("hidden");
        e.target.nextElementSibling.classList.add("visible");
    }else{
        e.target.nextElementSibling.classList.remove("visible");
        e.target.nextElementSibling.classList.add("hidden");
    }
}

export default function({name, handleClick}){
    return(
        <li
        className="recipe-name list-group-item list-group-item-info"
        onClick={details}
        >
            {name}
        </li>
    )
}