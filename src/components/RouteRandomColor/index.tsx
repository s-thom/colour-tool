import * as React from 'react';
import * as chroma from 'chroma-js';
import RouterRedirectColor from '../RouterRedirectColor';

export default class RouteRandomColor extends React.Component<IRouteComponentProps> {
  render() {
    console.log('random route', this.props.match);

    return (
      <RouterRedirectColor color={chroma.random()} />
    );
  }
}
