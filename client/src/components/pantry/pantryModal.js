import React, { Component } from 'react';
import ReactModal from 'react-modal';
import "./pantryModal.scss";
import axios from 'axios';
import Icon from '@material-ui/core/Icon';
import { Checkbox } from 'semantic-ui-react'

class PantryModal extends Component {
    constructor() {
        super();
        this.state = {
        name: '',
        pantry: [],
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
    deletePantryItem=(event)=> {
        axios.delete(`http://localhost:5000/pantry/${this.state.id}`)
        .then((response)=> {
            const data= response.data.pantryData;
            this.setState({ pantry: data});
            console.log('Pantry item deleted')
        })
        .catch(() => {
            console.log('Error retrieving pantry')
        });
    }
    handleDelete = (event) => {
        event.preventDefault();
        this.setState({ 
            id: event.target.value 
        });
    }
    
    handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
        [event.target.name]: event.target.value 
    })
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
        name: ''
    });
    };
    render() {
        console.log(this.props)
        return (
            <>
    <ReactModal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.close}
        className="pmodal__explore overlay"
        appElement={document.getElementById('portal')}

    >
    <form onSubmit={this.submit}>
    <div className="form__wrapper">
    <button className="pantrybtn"
        onClick={this.props.close}>Close</button>
    <h2> Input your Pantry Items</h2>
        <input
        className='pantry__input'
        type='text'
        name='name'
        placeholder="Enter item"
        value={this.state.name}
        onChange={this.handleInputChange}
        />
        <button className="pantrybtn">Submit</button>
        
    </div>
    </form>
        {this.state.pantry.map(item =>{
        return (
        <>
    <div className="pantry__container"
        key={item.id}>
        <div className="pantrybtn">
        <h5>{item.name}</h5>
    </div>
    <button 
        onClick={this.handleDelete}
        className="pantrybtn">Delete</button>
    </div>
        </>
        )
        })} 
    
        </ReactModal>
        </>
        )
    }
}

export default PantryModal;

