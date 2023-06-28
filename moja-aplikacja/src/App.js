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
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyle.css'
import styles from './components/appStyles.modules.css'
import Forms from './components/Forms';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/Fragments';
import Table from './components/Table'


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
      //Inne pobieranie stylow linijka 40/41
      return(
        <div className="App">
          <Table/>
         {/* <FragmentDemo/> */}
         {/* <LifeCycleA/> */}
        {/*  <h1 className='error'>Error</h1> 
          <h1 className={styles.success}>Success</h1>
      <Inline/> */}
           {/*<Forms/>*/}
          {/*<StyleSheet /> */}
          {/* <StyleSheet primary ={true}/>*/}
          {/* <NameList /> */}
          {/*<UserGreeting/>*/}
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

