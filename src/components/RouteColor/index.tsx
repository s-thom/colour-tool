import * as React from 'react';
import * as chroma from 'chroma-js';
import autobind from 'autobind-decorator';

import ColorPickerApp from '../ColorPickerApp';
import {
  hexWithoutHash,
  limitRate,
} from '../../util';

interface IRouteColorState {
  color: chroma.Color;
}

const URL_RATE_LIMIT = 100;

export default class RouteColor extends React.Component<IRouteComponentProps, IRouteColorState> {
  delayedUrlUpdate: (color: chroma.Color) => void;

  constructor(props: IRouteComponentProps) {
    super(props);

    this.state = {
      color: chroma.hex(`#${this.props.match.params.color}`),
    };

    this.delayedUrlUpdate = limitRate((color: chroma.Color) => {
      this.props.history.replace(`/${hexWithoutHash(color)}`);
    }, URL_RATE_LIMIT);
  }

  @autobind
  onColorChange(color: chroma.Color) {
    this.setState((prevState) => ({
      ...prevState,
      color,
    }));

    this.delayedUrlUpdate(color);
  }

  render() {
    const {
      color,
    } = this.state;

    return (
      <ColorPickerApp
        current={color}
        onColorChange={this.onColorChange}
      />
    );
  }
}
