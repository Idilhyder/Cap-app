import React, { Component } from 'react';
import axios from 'axios';
import { Checkbox } from 'semantic-ui-react'


class SearchForm extends Component {
    constructor () {
    super ();
    this.state = {
        pantry: [],
        isChecked: false
        }
        this.handleChange = this.handleChange.bind(this);
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

    handleChange(checked) {
        this.setState({ checked });
    }
    componentDidMount=()=>{
        this.getPantryItem();
    }
    
    render() {
    return (
        <>
        <fieldset>
        <h1>Your Pantry</h1>
        <form id='select'>
        {this.state.pantry.map(item =>{
    return (
        <>
        <Checkbox toggle
        type ="checkbox"
        name='pantry'
        value={this.state.name}
        onChange={this.handleChange} 
        checked={this.state.checked}
        />
        <label for='pantry'>{this.state.name}</label>
        </>
        )
        })} 
        </form>
        </fieldset>
        </>
    )
}
}
export default SearchForm;
