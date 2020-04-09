import React from 'react';
import styles from './theme/App.scss';
import DummyAd from './components/DummyAd';

/**
 * returns App
 * @returns {Object} App
 */
function App() {
  return (
    <div className={styles.App}>
      <header className={styles.Appheader}>
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
