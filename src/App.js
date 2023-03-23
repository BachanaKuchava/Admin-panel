import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import Game from './pages/games/Game';
import Main from './Main';






function App() {

  let component
  switch(window.location.pathname) {
    case '/' :
      component = <Main />
      break
    case '/games' :
      component = <Game />
      break
  }

  return (
    
 <>
 {/* <Main /> */}
 {component}
 </>
    
    
  
    
  )
}

export default App;