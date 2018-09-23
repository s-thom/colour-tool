import * as React from 'react';
import * as chroma from 'chroma-js';
import './index.css';

import ColorPickerApp from '../ColorPickerApp';

class App extends React.Component {
  render() {
    const start = chroma('#123');
    const end = chroma('#f6d');

    return (
      <div className="App">
        <ColorPickerApp />
      </div>
    );
  }
}

export default App;
