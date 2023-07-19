import React, {Component, useState} from 'react';
import { useNavigate } from "react-router-dom";
import Register, { RegisterForm } from './RegisterForm'
import {Link} from 'react-router-dom'


export const LoginForm = (props) => {
        const [user, setUser] = useState('');
        const [password, setPassword] = useState('');
       // const [isShown, setIsShown] = useState(false) open new component after click button

        const dataBase = {
            dbUser: 'michal125',
            dbPassword: 'Pass12345',
        }
    
        const handleSubmint = (e) => {
            e.preventDefault()      
        }

        //const hanleClick = event => {
          //  setIsShown(current => !current) open new component after click button
        //}

        const openInNewTab = url => {
            window.open(url, '_blank', 'noopener,noreferrer');
          };

        function validateForm(){
            if(user.length === 0){
                alert("user can not be empty")
                return
            }

            if(user !== dataBase.dbUser){
                alert('Invalid user name')
                return
            }

            if(user !== dataBase.dbPassword){
                alert('Invalid password')
                return
            }


            if(password.length === 0){
                alert("password can not be empty")
                return
            }


        }

        return (
            <div className='login-form'>
                <h2>Sign In</h2>
            <form className="login_form" onSubmit={handleSubmint}>
                <label htmlFor="user">User</label>
                <input value={user} type="text" onChange={(e)=>setUser(e.target.value)} placeholder="login" id="user" name="user"/>                
                <label htmlFor="password">Password</label>
                <input value={password} type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="********" id="password" name="password"/>            
                <input type="checkbox"/>
                <label htmlFor="checkbox">Remember me</label>
               <button type="Submint" onClick={() => {validateForm()}}>Log In</button>  
            </form>
            
            {/*<button className ="link-btn" onClick={hanleClick}>Don't have a Account? Register Now!</button>
            {isShown && <RegisterForm/>} open new component after click button*/} 
           
            <button className ="link-btn" onClick={() => openInNewTab('localhost:3000/register')}>Don't have a Account? Register Now!</button>
            </div>
        
            )
     }



export default LoginForm