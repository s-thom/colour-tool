import * as React from 'react';
import * as chroma from 'chroma-js';
import {
  Redirect,
} from 'react-router-dom';

interface IRouterRedirectColorProps {
  color: chroma.Color;
}

export default class RouterRedirectColor extends React.Component<IRouterRedirectColorProps> {
  render() {
    const {
      color,
    } = this.props;

    const hexMatch = color
      .hex()
      .match(/^#([A-Fa-f0-9]{6})/);

    if (hexMatch) {
      return (
        <Redirect to={`/${hexMatch[1]}`} />
      );
    } else {
      return (
        <Redirect to="/000000" />
      );
    }
  }
}
