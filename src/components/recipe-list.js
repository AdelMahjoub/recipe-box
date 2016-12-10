import React from 'react';
import Recipe from './recipe';

export default function({recipes, handleEdit, handleDelete}){
    return(
        <div className="list-group">
            {
                recipes.map((recipe,index) =>{
                    return <Recipe 
                        key={index}
                        index={index} 
                        recipe={recipe}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                        />
                })
            }
        </div>
    )
}