import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PantryModal from './../pantry/pantryModal';

const portalRoot = document.getElementById('portal');

class Portal extends Component {
    constructor() {
        super ();
        this.el = document.createElement('div');
    }
    componentDidMount =() => {
        portalRoot.appendChild(this.el);
    }
    componentWillUnmount =() => {
        portalRoot.removeChild(this.el);
    }
    render() {
        const {children} = this.props;
        return ReactDOM.createPortal(<PantryModal {...this.props}/>, this.el);
        
    }
}

export default Portal;
