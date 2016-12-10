import React from 'react';
import Button from './button';

export default function({handleAdd}){
    return(
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="https://github.com/AdelMahjoub/recipe-box" target="_blank">Recipe Box</a>
            </div>
            <div className="navbar-form navbar-right" title="add a recipe">
                <Button 
                color="btn btn-info"
                handleClick={handleAdd}
                glyphType="glyphicon glyphicon-plus"
                usage="add a recipe"
                />
            </div>
          </div>
        </nav>
    )
}