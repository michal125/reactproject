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
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput'
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';


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
          <UserProvider value="michal">
            <ComponentC />
          </UserProvider>
         {/* <ClickCounterTwo /> */}
          {/*<HoverCounterTwo /> /*}
          <User name={(isLoggedIn) =>  isLoggedIn ? "Michal": "Guest"}/>
          {/*<User render={(isLoggedIn) =>  isLoggedIn ? "Michal": "Guest"}/>*/}
          {/*<ClickCounter/> */}
          {/*<HoverCounter/> */}
        {/*}  <ErrorBoundary>
            <Hero heroName="Batman" />
          </ErrorBoundary>
          <ErrorBoundary>
          <Hero heroName="Joker" />
      </ErrorBoundary> */}
          {/*<FRParentInput /> */}
          {/*<FocusInput /> */}
          {/*<RefsDemo/> */}
          {/*<ParentComp/> */}
          {/*<Table/> */}
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

