/*global chrome */
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // componentWillMount() {
    var buildPopupDom = (mostVisitedURLs) => {
      console.log("mostVisitedURLs");
      console.log(mostVisitedURLs);
    }
    
    // }
    return (
      <div className="App">
      <header className="App-header">
        
{      chrome.topSites.get(buildPopupDom)}        
  Learn React
      </header>
    </div>
  );
}

export default App;
