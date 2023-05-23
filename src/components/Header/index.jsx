import React, { Component } from "react";
import Item from "../Item";
class index extends Component {
  // 子组件 子传父
  sendVal = () => {
    this.props.toDo(10);
  };
  render() {
    const { name, age, sendData } = this.props;
    return (
      <div>
        'header-header'{name}-{age}
        <button onClick={this.sendVal}>（按钮）子传父</button>
        <Item name={name} sendData={sendData}></Item>
      </div>
    );
  }
}

export default index;
