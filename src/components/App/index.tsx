import * as React from 'react';
import * as chroma from 'chroma-js';
import './index.css';

import logo from './logo.svg';
import GradientSlider from '../GradientSlider';

class App extends React.Component {
  public render() {
    const start = chroma('#123');
    const end = chroma('#f6d');

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <GradientSlider
          start={start}
          end={end}
          currentPercentage={0}
          onValueChanged={(v) => console.log('is', v)}
        />
      </div>
    );
  }
}

export default App;
