import * as React from 'react';
import * as chroma from 'chroma-js';
import {
  Link,
} from 'react-router-dom';
import {
  hexWithoutHash,
} from '../../util';

interface IColorLinkProps {
  to: chroma.Color;
}

export default class ColorLink extends React.Component<IColorLinkProps> {
  render() {
    const {
      children,
      to,
    } = this.props;

    return (
      <Link to={`/${hexWithoutHash(to)}`}>{children}</Link>
    );
  }
}
