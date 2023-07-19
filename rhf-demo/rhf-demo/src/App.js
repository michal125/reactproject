import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import YouTubeForm  from './components/YouTubeForm';

class App extends Component {
  render() {
    return(
      <div className="App">
        <YouTubeForm/>
      </div>
    )
  }
}

export default App;
