import * as React from 'react';
import * as chroma from 'chroma-js';
import autobind from 'autobind-decorator';
import './index.css';
import Card from '../Card';
import ColorPickerSliders from '../ColorPickerSliders';
import ColorInfoTable from '../ColorInfoTable';
import ColorSimilarOptions from '../ColorSimilarOptions';
import ContrastText from '../ContrastText';

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

  @autobind
  onRandomClick() {
    this.onColorChange(chroma.random());
  }

  render() {
    const {
      current,
    } = this.state;

    return (
      <div className="ColorPickerApp">
        <div
          className="ColorPickerApp-background"
          style={{
            backgroundColor: current.css(),
          }}
        />
        <div className="ColorPickerApp-content">
          <Card className="ColorPickerApp-info-container">
            <ColorInfoTable
              color={current}
            />
            <ColorSimilarOptions
              color={current}
              onColorChange={this.onColorChange}
            />
          </Card>
          <Card className="ColorPickerApp-sliders-container">
            <ColorPickerSliders
              color={current}
              onColorChange={this.onColorChange}
            />
            <div className="ColorPickerApp-random-container">
              <button
                className="ColorPickerApp-random-button"
                style={{
                  backgroundColor: current.css(),
                }}
                onClick={this.onRandomClick}
              >
                <ContrastText bgColor={current}>Random</ContrastText>
              </button>
            </div>
          </Card>
        </div>
      </div>

    );
  }
}
