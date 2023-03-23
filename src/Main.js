import React from 'react'
import Sidebar from './Sidebar';
import Home from './Home';

function Main() {
    return (
        <div className='container-fluid bg-secondary min-vh-100'>
        <div className='row '>
            <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
              <Sidebar />
            
              
            </div>
            <div className='col-4 col-md-2'></div>
            
              <Home />
           
        </div>
        
       
       
  
      </div>
    )
}

export default Main
