/*import React from 'react'
import {useState} from 'react';
import {Link} from 'react-router-dom';



function Login() {
    const[form,setForm]=useState({İsim:'',numara:'',mail:''});
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleChange=(event)=>{
        setForm({...form,[event.target.name]:event.target.value});
        console.log(form);
    }
    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
    };
    const renderErrorMessage = (name) =>
            name === errorMessages.name && (
                <div className="error">{errorMessages.message}</div>
            );
            const renderForm = (
                <div className="form">
                  <form>
                    <div className="input-container">
                      <label>Username </label>
                      <input type="text" name="uname" required />
                      {renderErrorMessage("uname")}
                    </div>
                    <div className="input-container">
                      <label>Password </label>
                      <input type="password" name="pass" required />
                      {renderErrorMessage("pass")}
                    </div>
                    <div className="button-container">
                      <input type="submit" />
                    </div>
                  </form>
                </div>
             );
    return (
        <div className='Login'>
            <h1>BİLGİLERİNİZİ GİRİN</h1>
            <form>
                <input type='text' name='İsim' value={form.İsim} onChange={handleChange}placeholder='Adınız'/>
                <input type='number' name='numara' value={form.numara} onChange={handleChange}placeholder='Numaranız' /> 
                <input type='email' name='mail'value={form.mail} onChange={handleChange} placeholder='mailiniz'/>
                
            </form>
            // Generate JSX code for error message
            
        
            <Link to={"/DersSecim"} >GİRİŞ</Link>
           
           
            
        
        </div>
    )
}

export default  Login;*/
import React, { useState } from "react";


import DersSecim from "./DersSecim";
import  './Login.css';


function Login() {

  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      userno: "1191602043",
      password: "123123"
    },
    {
      userno: "1191602050",
      password: "abcd12345"
    }
  ];

  const errors = {
    no: "invalid userno",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { no, pass } = document.forms[0];

  
    const userData = database.find((user) => user.userno === no.value);

   
    if (userData) {
      if (userData.password !== pass.value) {
        
        setErrorMessages({ name: "pass", message: errors.pass });//geçersiz şifre
        
      } else {
        setIsSubmitted(true);
      }
    } else {
      
      setErrorMessages({ name: "no", message: errors.no });
    }
    
    };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  
  const renderForm = (
    <div >
      <form onSubmit={handleSubmit}>
          <div className="logo"></div>
          <h1>Giriş Yapınız</h1>
        <div className="input-container">
        
          <label >Userno </label>
          <input type="text" name="no" required />
          <br></br>
          {renderErrorMessage("no")}
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
         <div> <input type="submit" onClick={"/DersSecim"} />
         </div>
        </div>
      </form>
    </div>
  );

  return (
    
    <div className="login">
      <div className="">
        
        {isSubmitted ? <div>{secimegidis()}</div> : renderForm}
      </div>
    </div>
  );
}
function secimegidis(){
    return(
        <DersSecim/>
    );

};

export default Login;
