import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet' //wywolanie komponentu
//import { Greet } from './components/Greet';
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponet from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';


function MyButton() {
  return (
    <button>Kliknij</button>
  );
}

//export default function MyApp() {
  //return (
    //<div>
     // <h1>Witaj</h1>
      //<MyButton />
    //</div>
 // );

  class App extends Component {
    render(){
      return(
        <div className="App">
          {<UserGreeting/>}
          {/*<ParentComponet/> */}
          {/*<EventBind/> */}
          {/* <Counter/> */}
         {/*<FunctionClick/>*/}
         {/*<ClassClick/>*/}
         {/*<Message/>*/}
         {/*<Greet name="Bruce" heroName="Batman"/> 
            <p>This is children props</p>
          <Greet name= "Clark" heroName="Superman"/> 
            <button>Action</button>
          <Greet name ="Diana" heroName="WonderWoman"/> 
          
          <Welcome name="Bruce" heroName="Batman"/>
          <Welcome name= "Clark" heroName="Superman"/>
          <Welcome name ="Diana" heroName="WonderWoman"/> */}
        </div>
      );
    }
  }

  export default App;

