import * as React from 'react';
import * as chroma from 'chroma-js';
import autobind from 'autobind-decorator';

import ColorPickerApp from '../ColorPickerApp';
import {
  hexWithoutHash,
} from '../../util';

export default class RouteColor extends React.Component<IRouteComponentProps> {

  @autobind
  onColorChange(color: chroma.Color) {
    this.props.history.push(`/${hexWithoutHash(color)}`);
  }

  render() {
    const {
      match,
    } = this.props;

    return (
      <ColorPickerApp
        current={chroma.hex(`#${match.params.color}`)}
        onColorChange={this.onColorChange}
      />
    );
  }
}
