import * as React from 'react';
import * as chroma from 'chroma-js';
import autobind from 'autobind-decorator';
import './index.css';
import ColorPickerSliders from '../ColorPickerSliders';

interface IColorPickerAppProps {
  temp?: false;
}

interface IColorPickerAppState {
  current: chroma.Color;
}

export default class ColorPickerApp extends React.Component<IColorPickerAppProps, IColorPickerAppState> {
  constructor(props: IColorPickerAppProps) {
    super(props);

    this.state = {
      current: chroma.random(),
    };
  }

  @autobind
  onColorChange(color: chroma.Color) {
    this.setState((prevState) => ({
      ...prevState,
      current: color,
    }));
  }

  render() {
    const {
      current,
    } = this.state;

    return (
      <div
        className="ColorPickerApp"
        style={{
          backgroundColor: current.css(),
        }}
      >
        <div className="ColorPickerApp-info-container">
        </div>
        <div className="ColorPickerApp-sliders-container">
          <ColorPickerSliders
            color={current}
            onColorChange={this.onColorChange}
          />
        </div>
      </div>

    );
  }
}
