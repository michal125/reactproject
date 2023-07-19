import React, {Component, useState} from 'react';

export const RegisterForm = () => {
    const [Name, setName ] = useState('');
    const [Surname, setSurname] = useState('');
    const [Email, setEmail] = useState('');
    const [Login, setLogin] = useState('');
    const [Date, setDate] = useState('');

    const handleSubmint = (e) => {
        e.preventDefault()      
    }

    return(
            <div className='login_form'>
            <h2>Register Now</h2>
                <form className='login_form'  onSubmit={handleSubmint}>
                <input value={Name} type="text" onChange={(e)=>setName(e.target.value)} placeholder="Name" id="Name" name="Name"/>
                <input value={Surname} type="text" onChange={(e)=>setSurname(e.target.value)} placeholder="Surname" id="Surname" name="Surname"/>
                <input value={Email} type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="your@mail.com" id="Email" name="Email"/>
                <input value={Date} type="date" onChange={(e)=>setDate(e.target.value)} placeholder="Date of Birth" id="Date" name="Date"/>
                <input value={Login} type="text" onChange={(e)=>setLogin(e.target.value)} placeholder="Your Login" id="Login" name="Login"/>
                <p></p>
                <button class='BtnCreate'>Create Account</button>
                <p></p>
                <button>Back</button>
                <input type="checkbox"/>
                <label htmlFor='checkbox'>I aggree a privacy politcs</label>
                </form>
            </div>
    )
}

export default RegisterForm