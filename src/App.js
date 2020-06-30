import React from 'react';
import ReactPlayer from 'react-player'
import './App.css';

function App() {
  return (
    <div className="App">
      <ReactPlayer 
      width = '480px' 
      height = '240px' 
      controls url = 'https://www.youtube.com/watch?v=nTNg5mdHvNA'
      onReady = {()=>console.log('onReady callback')}>
      </ReactPlayer>
    </div>
  );
}

export default App;
