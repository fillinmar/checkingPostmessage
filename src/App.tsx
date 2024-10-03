import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Popup} from "./popup";

function App() {
  const popup = new Popup({
    url: window.location.href,
    // messageOrigin: swaOrigin,
    // onMessage,
    // onClose,
    // width,
    // height,
  });
  const clickPopup = () =>{
    popup.open();
  }

  const postMessage = () =>{
    console.log('logs in postMessage');
    window.opener.postMessage(JSON.stringify({
      code: 'love',
    }));

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={clickPopup}> Open popup</button>
        <button onClick={postMessage}> Post Message </button>
      </header>
    </div>
  );
}

export default App;
