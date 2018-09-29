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
import RouteGradient from '../RouteGradient';
import Navigation from '../Navigation';
import Footer from '../Footer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation/>
          <div className="App-area">
            <Switch>
              <Route path="/" exact component={RouteRandomColor} />
              <Route path="/random" exact component={RouteRandomColor} />
              <Route path="/gradient" component={RouteGradient} />
              <Route path="/:color([A-Fa-f0-9]{6,6})" component={RouteColor} />
              <Route component={Route404} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
