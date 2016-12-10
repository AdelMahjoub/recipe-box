import React, { Component } from 'react';

export default class RecipeForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            ingredients: this.props.ingredients
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
    }
    handleNameChange(e){
        this.setState({name: e.target.value});
    }
    handleIngredientsChange(e){
        this.setState({ingredients: e.target.value})
    }
    render(){
        return(
            <div className="dialog">
                <div className="recipe-form">
                    <div className="form-group">
                        <form onSubmit={this.props.handleSubmit}>
                            <label>Recipe Name :</label>
                            <input
                            autoFocus
                            className="form-control"
                            required 
                            onChange={this.handleNameChange}
                            value={this.state.name}
                            />
                            <label>Ingredients :</label>
                            <textarea 
                            className="form-control"
                            required
                            onChange={this.handleIngredientsChange} 
                            value={this.state.ingredients}
                            placeholder="write ingredients separated by a comma. example: salt, water"
                            />
                            <br />
                            <div className="text-right">
                                <input className="btn btn-primary" type="submit" value="Confirm"/>
                                {' '}
                                <button className="btn btn-default" onClick={this.props.handleClose}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}