import './App.css';
import {BrowserRouter as Router ,Route,Switch,Redirect} from "react-router-dom";

import DersSecim from './Pages/DersSecim';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Ogretmen from './Pages/Ogretmen';
import OgrenciBilgisi from './Pages/OgrenciBilgisi';




function App()
{
  
  return (
    <div className="App">
      
      <Router>
        <Switch> 
          <Route  exact path='/' component={Home}/>   
          <Route  exact path='/Login' component={Login} />
          <Route  exact path='/DersSecim' component={DersSecim}/>
          <Route exact path='/Ogretmen' component={Ogretmen}/>
          <Route exact path='/OgrenciBilgisi' component={OgrenciBilgisi}/>
          <Redirect to="/" />
        </Switch>
           
      </Router>   
        
      
     
      
      
      
    </div>
  );
}


export default App;
