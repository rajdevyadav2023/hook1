
import { useState } from 'react';
import './App.css';
import Header from './components/Header';

import kids from './media/kids.png'
function App() {
  const[text, setText]=useState('');
// UpperCase 
  function handleUpperCase(){
    let newText = text.toUpperCase();
    setText(newText)
  }
  // LowerCase
  function handleLowerCase(){
    let newText = text.toLowerCase();
    setText(newText);
  }
  // Capitalize
  function handleCapitalize(){
    // Breaking into words
    let arr = text.split(" ");
    // Capitalizing all words 
    for(let i=0; i< arr.length ; i++){
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    // Joining all words
    let arr2 = arr.join(' ');
    // Setting Value
    setText(arr2)
  }
  // Copying 
  const copyToClipboard = text => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
      return navigator.clipboard.writeText(text);
    return Promise.reject('The Clipboard API is not available.');
  };
// Remove
function handleRemove(){
  setText('')
}
  return (
    <div className="App">
      <Header/>
      <div className="banner">
      <img src={kids} alt="kids" />
      </div>

      <div className="main">
      <div className='sidebar'>
      <p>Control Panal</p>
      <button onClick={handleUpperCase}>UpperCase</button>
      <button onClick={handleLowerCase}>LowerCase</button>
      <button onClick={handleCapitalize}>Capitalize</button>
      <button onClick={copyToClipboard}>Copy Text</button>
      <button onClick={handleRemove}>Remove Text</button>
    </div>

    <div className='input-field'>
      <textarea value={text} placeholder='Write Text Here...' onChange={(e)=>setText(e.target.value)}>{text}</textarea>
    </div>
      </div>
    </div>
  );
}

export default App;
