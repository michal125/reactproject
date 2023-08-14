import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import MainForm from './MainForm';
import {Table} from './components/Table';
import {Modal} from './components/Modal';

import { useState } from 'react';

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  const [rows,setRows] = useState([
  {page: "Page 1", description: "This is the first page", status:"live"},
  {page: "Page 2", description: "This is the second page", status:"draft"},
  {page: "Page 3", description: "This is the three page", status:"error"}
])

const handleDeleteRow = (targetIndex) => {
  setRows(rows.filter((_,idx) => idx !== targetIndex))
}

const handleSubmit = (newRow) => {
  setRows([...rows, newRow])
}


  return (
    <div className="App">
     {/*<LoginForm /> */}
     {/*<RegisterForm/> */}
     {/*<MainForm/> */}
     <Table rows={rows} deleteRow={handleDeleteRow}/>
     <button onClick={()=> setModalOpen(true)}>Add</button>
     {modalOpen && <Modal closeModal={() => {setModalOpen(false)}}
     onSubmit={handleSubmit}
     />}

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
