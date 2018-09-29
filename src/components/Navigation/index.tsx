import * as React from 'react';
import './index.css';
import {
  NavLink,
  withRouter,
} from 'react-router-dom';

class Navigation extends React.Component<IRouteComponentProps> {

  render() {
    const {
      match,
      location,
      history,
    } = this.props;

    return (
      <div className="Navigation">
        <div className="Navigation-link-list">
          <NavLink
            className="Navigation-link"
            activeClassName="Navigation-active-link"
            to="/random"
          >Random Colour</NavLink>
          <NavLink
            className="Navigation-link"
            activeClassName="Navigation-active-link"
            to="/gradient"
          >Basic Gradient</NavLink>
        </div>
      </div>
    );
  }
}

// tslint:disable-next-line:no-any
export default withRouter(Navigation as any);
