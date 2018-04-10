import React, { Component } from "react";

export default class Button extends Component {
  render() {
    const { handleSubmit } = this.props;
    return <button onClick={handleSubmit}>Click!</button>;
  }
}
