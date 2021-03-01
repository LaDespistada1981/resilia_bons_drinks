import React, { Component } from "react";
import "../Button/Button.module.css";

export default class Button extends Component {
  render() {
    return (
      <button className="btn" style={this.props.style}>
        {this.props.children}
      </button>
    );
  }
}
