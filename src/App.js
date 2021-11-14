import React from "react";
import PropTypes from "prop-types"

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
    { name: "Noname", age: 3},
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

// User.defaultProps = {
//   age: 1
// }

export default App;
