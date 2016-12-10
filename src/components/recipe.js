import React from 'react';
import Ingredient from './ingredient';
import RecipeName from './recipe-name';
import Button from './button';

export default function({recipe, handleEdit,handleDelete, index}){
    return(
        <div className="list-group-item">
            <RecipeName name={recipe.name}/>
            <div className="hidden">
                <ul className="list-group">
                    {
                        recipe.ingredients.map((ingredient,index) => <Ingredient key={index} ingredient={ingredient}/>)
                    }
                </ul>
                <div className="text-right">
                    <Button 
                    color="btn btn-success"
                    handleClick={handleEdit}
                    btnIndex={`edit_${index}`}
                    glyphType="glyphicon glyphicon-pencil"
                    usage="edit recipe"
                    />
                    {' '}
                    <Button 
                    color="btn btn-danger"
                    btnIndex={`delete_${index}`}
                    handleClick={handleDelete}
                    glyphType="glyphicon glyphicon-remove"
                    usage="delete recipe"
                    />
                </div>
            </div>
        </div>
    )
}