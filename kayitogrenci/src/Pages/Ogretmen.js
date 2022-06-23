import React, { useState } from "react";
import  './Login.css';
import OgrenciBilgisi from "./OgrenciBilgisi";


function Ogretmen() {

  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      id: "1111111",
      ad_soyad: "CEM TAŞÇI"
    },
    {
      id: "2222222",
      ad_soyad: "ALTAN MESUT"
    }
  ];

  const errors = {
    identify: "geçersiz id",
    adso: "geçersiz ad soyad "
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { identify, adso } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.id === identify.value);

    // Compare user info
    if (userData) {
      if (userData.ad_soyad !== adso.value) {
        // Invalid password
        setErrorMessages({ name: "adso", message: errors.adso });
        
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "identify", message: errors.identify });
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
        
          <label >ID </label>
          <input type="text" name="identify" required />
          <br></br>
          {renderErrorMessage("identify")}
          <label>AD SOYAD</label>
          <input type="text" name="adso" required />
          {renderErrorMessage("adso")}
         <div> <input type="submit" onClick={"/OgrenciBilgisi"} />
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
        <OgrenciBilgisi/>
    );

};

export default Ogretmen;
