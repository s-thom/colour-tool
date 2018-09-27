import * as React from 'react';
import * as chroma from 'chroma-js';

import ColorPickerApp from '../ColorPickerApp';

export default class RouteColor extends React.Component<IRouteComponentProps> {
  render() {
    const {
      match,
    } = this.props;

    return (
      <ColorPickerApp current={chroma.hex(`#${match.params.color}`)} />
    );
  }
}
