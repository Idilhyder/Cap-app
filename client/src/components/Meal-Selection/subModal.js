import React, { Component } from 'react';
import ReactModal from 'react-modal';
import "./subModal.scss"



class SubModal extends Component {
    render() {
        console.log(this.props)
        
    return(
        <ReactModal
        isOpen={this.props.isOpen}
        close={this.props.close}
        className="pmodal__explore overlay"
        onRequestClose={this.props.onRequestClose}
        appElement={document.getElementById('app')}
        >
        <div className="form__wrapper">
        <button className="pantrybtn"
            onClick={this.props.close}>Close</button>
        <h2> Substitutions</h2>
        </div>
        {this.props.list.map(item=>{
        return (
        <>
        {/* <form 
        onSubmit={this.props.submit}>
            <h1 className="roulette__title">Find Substitutions</h1>
        <input 
        className="main__search"
        placeholder="Enter an ingredient..."
        ref={input => this.search = input}
        onChange={this.props.handleInputChange}
        />
        </form> */}
        <div className="pantry__container"
            key={item.id}>
        <div className="pantrybtn">
        <p className="sub__title">Ingredient</p>
        <h5>{item.Ingredient}</h5>
        <p className="sub__title">Amount</p>
        <p>{item.Amount}</p>
        <p className="sub__title">Substitution</p>
        <p>{item.Substitution}</p>
        </div>
        </div>
        </>
        )
        })} 
        </ReactModal>
    );
    }
    }
    
    export default SubModal;