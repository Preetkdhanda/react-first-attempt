import React from 'react';    // 1️⃣
import './App.css';           // 2️⃣

function App() {
  const age = 25;              // ADDED
  const name = "Billy";        // ADDED
  
  return (
   <div>
  	  <h1 className="title">Hello World!</h1>
  	  <p> This is a paragraph of text</p>
  	  <p> My name is {name} and I'm {age} years old</p>
  	</div>  
  );
}                          // 8️⃣



export default App; 