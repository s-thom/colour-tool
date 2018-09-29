import * as React from 'react';
import * as chroma from 'chroma-js';
import autobind from 'autobind-decorator';
import './index.css';
import { Link } from 'react-router-dom';
import Card from '../Card';
import ColorPickerSliders from '../ColorPickerSliders';
import ContrastText from '../ContrastText';
import SwatchList from '../SwatchList';

interface IPageGradientProps {
  // current: chroma.Color;
  // onColorChange: (color: chroma.Color) => void;
  temp?: string;
}

interface IPageGradientState {
  startColor: chroma.Color;
  endColor: chroma.Color;
}

export default class PageGradient extends React.Component<IPageGradientProps, IPageGradientState> {
  constructor(props: IPageGradientProps) {
    super(props);

    this.state = {
      startColor: chroma.random(),
      endColor: chroma.random(),
    };
  }

  makeCssGradientString() {
    const {
      startColor,
      endColor,
    } = this.state;

    return `linear-gradient(-0.125turn, ${startColor.css()} 0%, ${endColor.css()} 100%)`;
  }

  @autobind
  onStartColorChange(color: chroma.Color) {
    this.setState((prevState) => ({
      ...prevState,
      startColor: color,
    }));
  }

  @autobind
  onEndColorChange(color: chroma.Color) {
    this.setState((prevState) => ({
      ...prevState,
      endColor: color,
    }));
  }

  @autobind
  onRandomClick() {
    this.setState((prevState) => ({
      ...prevState,
      startColor: chroma.random(),
      endColor: chroma.random(),
    }));
  }

  render() {
    const {
      startColor,
      endColor,
    } = this.state;

    const scale = chroma.scale([
      startColor,
      endColor,
    ]);
    const average = chroma.average([
      startColor,
      endColor,
    ]);

    return (
      <div className="PageGradient">
        <div
          className="PageGradient-background"
          style={{
            background: this.makeCssGradientString(),
          }}
        />
        <div className="PageGradient-content">
          <Card className="PageGradient-info-container">
            <div className="PageGradient-swatches">
              <SwatchList
                colors={scale.colors(7, null)}
                showHex={true}
              />
            </div>
          </Card>
          <Card className="PageGradient-sliders-container">
            <h2>Start Colour</h2>
            <ColorPickerSliders
              color={startColor}
              onColorChange={this.onStartColorChange}
            />
            <h2>End Colour</h2>
            <ColorPickerSliders
              color={endColor}
              onColorChange={this.onEndColorChange}
            />
            <div className="PageGradient-random-container">
              <button
                className="PageGradient-random-button"
                style={{
                  background: this.makeCssGradientString(),
                }}
                onClick={this.onRandomClick}
              >
                <ContrastText bgColor={chroma.average([startColor, endColor], 'lab')}>Random</ContrastText>
              </button>
            </div>
          </Card>
        </div>
      </div>

    );
  }
}
