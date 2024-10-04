import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Popup} from "./popup";

function App() {
  const url =  window.location.href;
  console.log('logs url', url)
  const popup = new Popup({
    url: url,
    // messageOrigin: swaOrigin,
    // onMessage,
    // onClose,
    // width,
    // height,
  });
  const clickPopup = () =>{
    popup.open();
  }


  const objectAssign = () =>{
    const tmpClickedLink = Object.assign(document.createElement('a'), {
      href: url,
      target: '_blank',
      rel: 'noopener noreferrer',
    });
    tmpClickedLink.click();
  }

  const simpleWindowOpen = () => {
    window.open(
        url,
        '_blank',
        'toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes, noopener=true',
    );
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
        <button onClick={objectAssign}> object Assign</button>
        <button onClick={simpleWindowOpen}> object Assign</button>
        <button onClick={postMessage}> Post Message</button>
      </header>
    </div>
  );
}

export default App;
