import React, { Component } from "react";

// class App extends Component {
//   render() {
//     return(
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("I am clicked!")}}/>
//       </React.Fragment>
//     ); 
//   }
// }

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }

  handlePulseButton = () => {
    console.log("handlePlus")
    this.setState({count: this.state.count + 1})
  }

  handleDownButton = () => {
    console.log("handleDown")
    this.setState({count: this.state.count - 1})
  }
  render() {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePulseButton}>+1</button>
        <button onClick={this.handleDownButton}>-1</button>
      </React.Fragment>
    )
  }
}

// User.defaultProps = {
//   age: 1
// }

export default App;
