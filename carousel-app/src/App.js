import React from 'react';
import './theme/App.scss';
import DummyAd from './components/DummyAd';

/**
 * returns App
 * @returns {Object} App
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Carousel Adverts</p>
      </header>
      <div>
        <DummyAd />
        <DummyAd />
        <DummyAd />
        <DummyAd />
      </div>
    </div>
  );
}

export default App;
