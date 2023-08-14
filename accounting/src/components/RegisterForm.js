import React, {Component, useState} from 'react';

export const RegisterForm = () => {
    const [Name, setName ] = useState('');
    const [Surname, setSurname] = useState('');
    const [Email, setEmail] = useState('');
    const [Login, setLogin] = useState('');
    const [date, setDate] = useState('');

    const handleSubmint = (e) => {
        e.preventDefault()      
    }

    function validateRegister(){
        const number = ['0','1','2','3','4','5','6','7','8','9']
        const mail = ['@']
        //Validate Name
        if(typeof Name !=='string'){
            alert("Name must be string !")
        }

        for(let i = 0; i<Name.length; i++){
            if(Name[i] in number){
                alert("Name must be without number !")
            }
        }

        if(Name.length === 0){
            alert('Field Name is empty')
        }

        // Validate Surname
        if(typeof Surname !=='string'){
            alert("Surname must be string !")
        }

        for(let i = 0; i<Surname.length; i++){
            if(Surname[i] in number){
                alert("Surname must be without number !")
            }
        }

        if(Surname.length === 0){
            alert('Field Surame is empty')
        }

        //Validate Email
        if(Name.length === 0){
            alert('Field Email is empty')
        }

        for(let i = 0; i<Email.length; i++){
            if(!(Email[i] in mail)){
                alert("Mail is without @")
            } 
        }

        //Validate Date

       if(date.length === 0){
           alert("Date is empty")

       }

        var currentDate = new Date()
        var currentYear = currentDate.getFullYear()
        if(parseInt(currentYear)-parseInt(date.slice(0,4))<parseInt(date)){
           alert('You are to young :)')
        }


    }

    return(
            <div className='login_form'>
            <h2>Register Now</h2>
                <form className='login_form'  onSubmit={handleSubmint}>
                <input value={Name} type="text" onChange={(e)=>setName(e.target.value)} placeholder="Name" id="Name" name="Name"/>
                <input value={Surname} type="text" onChange={(e)=>setSurname(e.target.value)} placeholder="Surname" id="Surname" name="Surname"/>
                <input value={Email} type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="your@mail.com" id="Email" name="Email"/>
                <input value={date} type="date" onChange={(e)=>setDate(e.target.value)} placeholder="Date of Birth" id="Date" name="Date"/>
                <input value={Login} type="text" onChange={(e)=>setLogin(e.target.value)} placeholder="Your Login" id="Login" name="Login"/>
                <p></p>
                <button class='BtnCreate' onClick={() => (validateRegister())}>Create Account</button>
                <p></p>
                <button>Back</button>
                <input type="checkbox"/>
                <label htmlFor='checkbox'>I aggree a privacy politcs</label>
                </form>
            </div>
    )
}

export default RegisterForm