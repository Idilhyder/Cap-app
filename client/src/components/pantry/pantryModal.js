// import React, { Component } from 'react';
// import ReactModal from 'react-modal';
// import "./pantry.scss";
// import ReactDOM from 'react-dom';
// import { createPortal } from 'react-dom';



// class PantryModal extends Component {
//     render() {
//         console.log(this.props)
//         return (
//             <>
//     <ReactModal
//         isOpen={this.props.isOpen}
//         className="modal__explore overlay"
//         onRequestClose={this.props.onRequestClose}
//         appElement={document.getElementById('app')}
//     >
//     <form onSubmit={this.submit}>
//     <div className="form-input">
//         <input
//         type='text'
//         name='name'
//         placeholder="Enter item"
//         value={this.state.name}
//         onChange={this.handleChange}
//         />
//         </div>
//         <button>Submit</button>
//     </form>
//     <div className="card-body">
//         {this.props.items.map(item =>{
//         return (
//         <>
//     <div key={item.id}>
//     <h5 className="card-title">{item.name}</h5>
//     </div>
//         </>
//         )
//         })} 
//     </div>
//         </ReactModal>
//         </>
//         )
//     }
// }

    




// export default PantryModal;