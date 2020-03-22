import React, { Component } from 'react';
import axios from 'axios';
import Hero from "./../components/hero/hero";
import SideBar from "./../components/card/sideBar";
import PantryModal from '../components/pantry/pantryModal';





class Main extends Component {
  constructor () {
    super();
    this.state = {
          name: '',
          pantry: [],
          results: [],
          recipes: [],
          random: [],
    };
  }
  getPantryItem = () => {
    axios.get(`http://localhost:5000/pantry`)
    .then((response)=> {
      const data= response.data.pantryData;
      this.setState({ pantry: data});
      console.log('Pantry received')
    })
    .catch(() => {
      console.log('Error retrieving pantry')
    });
  }

  submit = (event) => {
    event.preventDefault();
    const payload = {
      name: this.state.name,
    }
    axios({ 
      url: `http://localhost:5000/pantry`,
      method: 'POST',
      data: payload
    })
    .then(()=> {
      console.log('Data sent');
      this.resetUserInputs();
      this.getPantryItem();
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
    <SideBar/>
    <Hero/>
      </>
    );
}
}


export default Main;
