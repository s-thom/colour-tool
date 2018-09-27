import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './index.css';

import Route404 from '../Route404';
import RouteColor from '../RouteColor';
import RouteRandomColor from '../RouteRandomColor';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={RouteRandomColor} />
            <Route path="/random" exact component={RouteRandomColor} />
            <Route path="/:color([A-Fa-f0-9]{6,6})" component={RouteColor} />
            <Route component={Route404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
