import * as React from 'react';
import * as chroma from 'chroma-js';
import {
  Redirect,
} from 'react-router-dom';
import {
  hexWithoutHash,
} from '../../util';

interface IRouterRedirectColorProps {
  color: chroma.Color;
}

export default class RouterRedirectColor extends React.Component<IRouterRedirectColorProps> {
  render() {
    const {
      color,
    } = this.props;

    let colorString;
    try {
      colorString = hexWithoutHash(color);
    } catch (err) {
      colorString = '000000';
    }

    return (
      <Redirect to={`/${colorString}`} />
    );
  }
}
