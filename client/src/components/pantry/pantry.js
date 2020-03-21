import React, { Component } from 'react';
import axios from 'axios';
import PantryModal from "./pantryModal";

class Pantry extends Component {
  constructor () {
    super ();
    this.state = {
      name: '',
      pantry: [],
      results: [],
      showModal: false
    }
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
  componentDidMount = () => {
    this.getPantryItem();
}
  resetUserInputs = () => {
    this.setState({
      name: '',
    });
  };

  render() {
    return (
      <>
      {/* <PantryModal
      isOpen={this.state.isShowing}
      onRequestClose={this.handleCloseModal}
      items={this.state.pantry}/> */}
      </>
    )
  }
}
export default Pantry;