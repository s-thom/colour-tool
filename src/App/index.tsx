import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './index.css';

import Route404 from '../routes/Route404';
import RouteColor from '../routes/RouteColor';
import RouteRandomColor from '../routes/RouteRandomColor';
import RouteGradient from '../routes/RouteGradient';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
