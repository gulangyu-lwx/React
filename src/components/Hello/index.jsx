import React from "react";
import Header from "../Header";
export default class Hello extends React.Component {
  state = {
    fatherObj: { name: "啦啦啦啦啦了", age: 12 },
    objData: [],
  };
  toDo = (val) => {
    console.log(val, "vavval");
  };
  sendData = (val) => {
    // this.props.sendData(val);
    console.log(val, "孙信息--", typeof val);
    this.setState({ objData: val });
  };
  render() {
    // 父组件 父传子
    // 父组件 父传孙
    return (
      <div>
        <Header
          {...this.state.fatherObj}
          toDo={this.toDo}
          sendData={this.sendData}
        ></Header>
        <div>
          孙传父的数组：
          {this.state.objData.map((item) => {
            return (
              <div id={item.id} key={item.id}>
                {item.name}
              </div>
            );
          })}
        </div>
        <h2 style={{ fontSize: "18px" }}>Hello - Hello</h2>;
      </div>
    );
  }
}
