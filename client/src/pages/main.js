import React, { Component } from 'react';
import axios from 'axios';
import Hero from "./../components/hero/hero";
import SideBar from "./../components/card/sideBar";
import PantryModal from '../components/pantry/pantryModal';
import Pantry from './../components/pantry/pantry';
import MainCard from './../components/card/mainCard';
import Paper from '@material-ui/core/Paper';


class Main extends Component {
  constructor () {
    super();
    this.state = {
          name: '',
          pantry: [],
          showModal: false
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

  onSubmit = (event) => {
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

  openModal = () => {
    this.setState({showModal:true});
    console.log("modal opened")
  }
  closeModal = () => {
      this.setState({showModal:false})
  }


  resetUserInputs = () => {
    this.setState({
      name: '',
    });
  };

  handleSidebarCardClick=()=> {
    this.openModal()
  }
 
  
  componentDidMount = () => {
  this.getPantryItem();
  }

  render() {
    console.log(this.state.pantry)
    return (
    <>
    <SideBar
    isOpen={this.openModal}
    onRequestClose={this.closeModal}
    
    />
    <Hero/>
      </>
    );
}
}


export default Main;
