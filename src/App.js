import React, { Component } from 'react';
import RecipeList from './components/recipe-list';
import RecipeForm from './components/recipe-form';
import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const SampleRecipes = [
  {
    name: "Ginger Champagne",
    ingredients: ["champagne", "ginger", "ice", "vodka"]
  },
  {
    name: "Potato and Cheese Frittata",
    ingredients: ["cheddar cheese", "eggs", "olive oil", "onions", "potato", "salt"]
  },
  {
    name: "Eggnog Thumbprints",
    ingredients: ["brown sugar", "butter", "powdered sugar", "eggs", "flour", "nutmeg", "rum", "salt", "vanilla extract", "sugar"]
  },
  {
    name: "Succulent Pork Roast",
    ingredients: ["brown sugar", "garlic", "pork chops", "water"]
  },
  {
    name: "Irish Champ",
    ingredients: ["black pepper", "butter", "green onion", "milk", "potato", "salt"]
  },
  {
    name: "Chocolate-Cherry Thumbprints",
    ingredients: ["cocoa powder", "baking powder", "butter", "eggs", "flour", "oats", "salt", "sugar", "vanilla extract"]
  },
  {
    name: "Mean Woman Pasta",
    ingredients: ["garlic", "kalamata olive", "olive oil", "pepperoncini", "seashell pasta", "tomato"]
  },
  {
    name: "Hot Spiced Cider",
    ingredients: ["allspice", "apple cider", "brown sugar", "cinnamon", "cloves", "nutmeg", "orange", "salt"]
  },
  {
    name: "Isa's Cola de Mono",
    ingredients: ["cinnamon", "cloves", "instant coffee", "milk", "rum", "vanilla extract", "water", "sugar"]
  },
  {
    name: "Amy's Barbecue Chicken Salad",
    ingredients: ["barbecue sauce", "chicken", "cilantro", "lettuce", "ranch dressing", "lettuce", "tomato"]
  }
]

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes : [],
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
    }else{
      this.setState({recipes: SampleRecipes});
    }
  }
  componentDidUpdate(){
    localStorage.setItem('_SultanCodeCamp_recipes', JSON.stringify(this.state.recipes));
  }
  render() {
    return (
      <div className="container">
      <div className="row">
      <div className="col-xs-12 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
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
        </div>
        </div>
    );
  }
}
export default App;
