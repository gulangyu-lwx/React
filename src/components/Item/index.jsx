import React, { Component } from "react";
import PropTypes from "prop-types";

class Item extends Component {
  // props校验
  static propTypes = {
    name: PropTypes.array,
  };
  state = {
    group: [
      { id: 1, name: "ni" },
      { id: 2, name: "wo" },
    ],
  };
  sendData = () => {
    this.props.sendData(this.state.group);
  };
  render() {
    // 孙组件 孙传父
    return (
      <div>
        <div>{this.props.name}</div>
        <button onClick={this.sendData}>孙传父</button>
      </div>
    );
  }
}

export default Item;
