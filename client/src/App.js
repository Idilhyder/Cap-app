import React, { Component } from 'react';
import axios from 'axios';
import RecipeSearch from './components/recipeSearch';



class App extends Component {
  constructor () {
    super();
    this.state = {
          name: '',
          pantry: []
        };
  }
  getPantryItem = () => {
    axios.get('http://localhost:5000/pantry')
    .then((response)=> {
      const data= response.data.pantryData;
      this.setState({ pantry: data});
      console.log('Pantry received')
    })
    .catch(() => {
      console.log('Error retrieving pantry')
    });
  }

  componentDidMount = () => {
    this.getPantryItem();
  }

  handleChange = ({ target }) => {
    const { name, value }= target;
    this.setState({
      [name]:value });
  }

  submit = (event) => {
    event.preventDefault();

    const payload = {
      name: this.state.name,
    }

    axios({
      url: 'http://localhost:5000/pantry',
      method: 'POST',
      data: payload
    })
    .then(()=> {
      console.log('Data sent');
      this.resetUserInputs();
    })
    .catch(()=> {
      console.log('Data not sent');
    });
  };
  
  resetUserInputs = () => {
    this.setState({
      name: '',
    });
  };

  render() {
    console.log(this.state.pantry)
    return (
      <>
      <h1>TEST PANTRY</h1>
      <form onSubmit={this.submit}>
        <div className="form-input">
          <input
          type='text'
          name='name'
          placeholder="Enter item"
          value={this.state.name}
          onChange={this.handleChange}
          />
          </div>
          <button>Submit</button>
      </form>
      <RecipeSearch/>
      <div className="pantry">
      <h3>Your Pantry</h3>
      {this.state.pantry.map(item=>{
        return (
        <p>{item.name}</p>
        )
      })}
        </div>
      </>
    );
}
}


export default App;
