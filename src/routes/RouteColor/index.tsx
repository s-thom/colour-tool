import * as React from 'react';
import * as chroma from 'chroma-js';
import autobind from 'autobind-decorator';

import PageColor from '../../pages/PageColor';
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

  componentDidUpdate(prevProps: IRouteComponentProps, prevState: IRouteColorState) {
    if (prevProps.match.params.color !== this.props.match.params.color) {
      this.onColorChange(chroma.hex(`#${this.props.match.params.color}`));
    }
  }

  render() {
    const {
      color,
    } = this.state;

    return (
      <PageColor
        current={color}
        onColorChange={this.onColorChange}
      />
    );
  }
}
