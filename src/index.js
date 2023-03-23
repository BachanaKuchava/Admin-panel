import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './Main';
import Game from './pages/games/Game';


const root = ReactDOM.createRoot(document.getElementById('root'));
let component
switch(window.location.pathname) {
  case '/' :
    component = <Main />
    break
  case '/games' :
    component = <Game />
    break
}
root.render(
  <React.StrictMode>
    <BrowserRouter>
      
     {component}
    
    </BrowserRouter>
   
   
   
    
    
  </React.StrictMode>
);


reportWebVitals();
