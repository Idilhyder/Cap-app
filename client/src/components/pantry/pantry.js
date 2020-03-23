import React, { Component } from 'react';
import axios from 'axios';
import PantryModal from "./pantryModal";

class Pantry extends Component {
constructor () {
super ();
this.state = {
    name: '',
    pantry: [],
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
handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
        [event.target.name]: event.target.value 
    })
}
resetUserInputs = () => {
    this.setState({
        name: '',
    });
};

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

    handleOpenModal = () => {
        this.setState({showModal:true});
        console.log("modal opened")
    }
    handleCloseModal = () => {
        this.setState({showModal:false})
    }

render() {
return (
    <PantryModal 
    list={this.state.pantry}
    isOpen={this.handleOpenModal}
    onRequestClose={this.handleCloseModal}
    onClose={this.handleCloseModal}
    />
   );
    }
}
export default Pantry;