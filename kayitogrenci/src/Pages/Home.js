import React from 'react'

import {NavLink} from "react-router-dom";
import  "./Home.css";


function Home() {
  return (
   <div class="ana">
        
     

        <div class="myDiv" >
          <nav > 
            <NavLink to="/Ogretmen">Öğretmen Girişi için tıklayınız</NavLink>
          </nav>
        </div>
        

        <div class="OgrDiv">
          <nav >
            <NavLink to="/Login">Öğrenci Girişi için tıklayınız</NavLink> 
          </nav>
        </div> 
      
    </div>
  )
}

export default Home;