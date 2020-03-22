import React, { Component } from 'react';
import ReactModal from 'react-modal';
import "./pantry.scss";
import axios from 'axios';

class PantryModal extends Component {
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
        console.log(this.state)
        return (
            <>
    <ReactModal
        isOpen={this.state.showModal}
        className="modal__explore overlay"
        onRequestClose={this.state.onRequestClose}
        appElement={document.getElementById('portal')}
    >
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
    <div className="card-body">
        {this.state.pantry.map(item =>{
        return (
        <>
    <div key={item.id}>
    <h5 className="card-title">{item.name}</h5>
    </div>
        </>
        )
        })} 
    </div>
        </ReactModal>
        </>
        )
    }
}

export default PantryModal;