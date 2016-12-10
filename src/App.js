import React, { Component } from 'react';
import RecipeList from './components/recipe-list';
import RecipeForm from './components/recipe-form';
import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes : [
        {
          name: "Spaguetti",
          ingredients: [
            "water",
            "salt",
            "tomatos",
            "basilic"
          ]
        },
        {
          name: "Roas Duck",
          ingredients: [
            "Duck",
            "glaze"
          ]
        }
      ],
      add: false,
      edit: false,
      target: null
    }
    this.onRecipeFormSubmit = this.onRecipeFormSubmit.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
    this.onDeleteCLick = this.onDeleteCLick.bind(this);
    this.onRecipeFormCancel = this.onRecipeFormCancel.bind(this);
  }
  onRecipeFormSubmit(e){
    e.preventDefault();
    var recipe = {}
    recipe.name = e.target[0].value;
    recipe.ingredients = e.target[1].value.split(',')
      .filter( ingredient => /\w/g.test(ingredient));
    if(this.state.add){
      this.setState({
        recipes: this.state.recipes.concat(recipe),
        add: false
      });
    }else if(this.state.edit){
      var recipes = this.state.recipes;
      recipes[this.state.target] = recipe;
      this.setState({
        recipes,
        edit: false
      })
    }
  }
  onEditClick(e){
    var i;
    i = 
      e.target.localName === "span" ? 
        e.target.parentElement.id.split('_')[1] : e.target.id.split('_')[1];
    this.setState({
      edit: true,
      target: Number(i)
    });
  }
  onDeleteCLick(e){
    var i;
    i = 
      e.target.localName === "span" ? 
        e.target.parentElement.id.split('_')[1] : e.target.id.split('_')[1];
    var recipes = this.state.recipes.filter( recipe => this.state.recipes.indexOf(recipe) !== Number(i));
    this.setState({recipes});
  }
  onAddClick(e){
    this.setState({add: true});
  }
  onRecipeFormCancel(e){
    e.preventDefault();
    this.setState({
      add: false,
      edit: false
    });
  }
  componentWillMount(){
    if(localStorage.getItem('_SultanCodeCamp_recipes') !== null){
      this.setState({
        recipes: JSON.parse(localStorage.getItem('_SultanCodeCamp_recipes'))
      })
    }
  }
  componentDidUpdate(){
    localStorage.setItem('_SultanCodeCamp_recipes', JSON.stringify(this.state.recipes));
  }
  render() {
    return (
      <div className="container">
        <NavBar handleAdd={this.onAddClick} />
        <RecipeList 
        recipes={this.state.recipes}
        handleEdit={this.onEditClick}
        handleDelete={this.onDeleteCLick}
        />
        {
          this.state.add &&
          <RecipeForm
          name=''
          ingredients={[]}
          handleSubmit={this.onRecipeFormSubmit}
          handleClose={this.onRecipeFormCancel}
          />
        }
        {
          this.state.edit &&
          <RecipeForm
          name={this.state.recipes[this.state.target].name}
          ingredients={this.state.recipes[this.state.target].ingredients}
          handleSubmit={this.onRecipeFormSubmit}
          handleClose={this.onRecipeFormCancel}
          />
        }
        </div>
    );
  }
}
export default App;
