import React from "react";
import ReactDOM from "react-dom";

import PantryModal from "./../pantry/pantryModal";

class Portal extends React.Component {
  constructor(props) {
    super(props);

    this.rootSelector = document.getElementById("portal");
    this.container = document.createElement("div");
  }

  componentDidMount() {
    this.rootSelector.appendChild(this.container);
  }

  componentWillUnmount() {
    this.rootSelector.removeChild(this.container);
  }

  render() {
    return ReactDOM.createPortal(<PantryModal {...this.props} />, this.container);
  }
}

export default Portal;
