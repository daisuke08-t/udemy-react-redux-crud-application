import React from "react";

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

const App = () => {
  const profiles = [
    { name: "Taro", age: 10},
    { name: "Hanako", age: 5},
    { name: "Noname"},
  ]
  return (
    <div>
      {
        profiles.map((prodile, index) => {
          return <User name={prodile.name} age={prodile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi!, I am {props.name} and {props.age} years old</div>
}

User.defaultProps = {
  age: 1
}

export default App;
