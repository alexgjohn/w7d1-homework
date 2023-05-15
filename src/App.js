import React from 'react';    
import './App.css';           

function App() { 
  
  const name = 'Alex' 
  const age = 32              
  // we can write JS here :)  
  
  return (                    
  <div>
  <h1 className="title">Hello World!</h1>
  <p> This is a paragraph of text written by {name}</p>
  <p> My name is {name} and I'm {age} years old</p>
  </div>                     
  );                         
}                             

export default App;           