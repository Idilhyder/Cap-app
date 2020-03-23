import React, { Component } from 'react';
import axios from 'axios';
import Hero from "./../components/hero/hero";
import SideBar from "./../components/card/sideBar";
import PantryModal from '../components/pantry/pantryModal';
import Pantry from './../components/pantry/pantry';


class Main extends Component {
  constructor () {
    super();
    this.state = {
          // name: '',
          // pantry: [],
          // results: [],
          // recipes: [],
          // random: [],
          showModal: false
    };
  }
  // getPantryItem = () => {
  //   axios.get(`http://localhost:5000/pantry`)
  //   .then((response)=> {
  //     const data= response.data.pantryData;
  //     this.setState({ pantry: data});
  //     console.log('Pantry received')
  //   })
  //   .catch(() => {
  //     console.log('Error retrieving pantry')
  //   });
  // }

  // submit = (event) => {
  //   event.preventDefault();
  //   const payload = {
  //     name: this.state.name,
  //   }
  //   axios({ 
  //     url: `http://localhost:5000/pantry`,
  //     method: 'POST',
  //     data: payload
  //   })
  //   .then(()=> {
  //     console.log('Data sent');
  //     this.resetUserInputs();
  //     this.getPantryItem();
  //   })
  //   .catch(()=> {
  //     console.log('Data not sent');
  //   });
  // };

  handleOpenModal = () => {
    this.setState({showModal:true});
    console.log("modal opened")
  }
  handleCloseModal = () => {
      this.setState({showModal:false})
  }
//   HandleChange(event) {
//     this.setState({ 
//       [event.target.name]: event.target.value 
//     });
// }
  // resetUserInputs = () => {
  //   this.setState({
  //     name: '',
  //   });
  // };
  
  // componentDidMount = () => {
  // this.getPantryItem();
  // }

  render() {
    console.log(this.state.pantry)
    return (
    <>
    <SideBar/>
    <Hero/>
    {/* <PantryModal
    isOpen={this.state.isShowing}
    onClose={this.handleCloseModal}
    onRequestClose={this.handleCloseModal}
    items={this.state.pantry}/> */}
      </>
    );
}
}


export default Main;
