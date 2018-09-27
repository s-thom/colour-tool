import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import * as chroma from 'chroma-js';
import './index.css';

import Route404 from '../Route404';
import RouteColor from '../RouteColor';
import RouteRandomColor from '../RouteRandomColor';

class App extends React.Component {
  render() {
    const start = chroma('#123');
    const end = chroma('#f6d');

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/:color([A-Fa-f0-9]{6})" component={RouteColor} />
            <Route path="/" component={RouteRandomColor} />
            <Route component={Route404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
