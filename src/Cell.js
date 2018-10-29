import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "color":this.props.value
    }
  }

  returncolor() {
    return {backgroundColor: this.state.color}
  }

  handleClick(event) {
    this.setState ({
      "color": "#333"
    })
  }

  render() {
    return (
      <div className="cell" style={this.returncolor()} onClick={this.handleClick.bind(this)}/>
    )
  }
}
