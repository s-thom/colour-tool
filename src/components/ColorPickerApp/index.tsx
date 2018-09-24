import * as React from 'react';
import * as chroma from 'chroma-js';
import autobind from 'autobind-decorator';
import './index.css';
import Card from '../Card';
import ColorPickerSliders from '../ColorPickerSliders';
import ColorInfo from '../ColorInfo';

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
        <Card className="ColorPickerApp-info-container">
          <ColorInfo
            color={current}
            onColorChange={this.onColorChange}
          />
        </Card>
        <Card className="ColorPickerApp-sliders-container">
          <ColorPickerSliders
            color={current}
            onColorChange={this.onColorChange}
          />
        </Card>
      </div>

    );
  }
}
