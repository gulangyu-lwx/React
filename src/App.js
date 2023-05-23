import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";

function App() {
  let myDom = "<span>测试文字</span>";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ color: "red" }} a="aa" data-b="b">
          <div dangerouslySetInnerHTML={{ __html: myDom }}></div>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" target="_blank" rel="noopener noreferrer">
          <Hello></Hello>
        </a>
      </header>
    </div>
  );
}

export default App;
