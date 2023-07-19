import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <div className="App">
     {/*<LoginForm /> */}
     <RegisterForm/>
    </div>
  );
} 
/*class App extends Component {
  render() {
    return(
      <div className="App">    
        <LoginForm/>
      </div>
    )
  }
} */

export default App;
