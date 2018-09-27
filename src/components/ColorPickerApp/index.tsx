import * as React from 'react';
import * as chroma from 'chroma-js';
import autobind from 'autobind-decorator';
import './index.css';
import Card from '../Card';
import ColorPickerSliders from '../ColorPickerSliders';
import ColorInfoTable from '../ColorInfoTable';
import ColorSimilarOptions from '../ColorSimilarOptions';
import ContrastText from '../ContrastText';
import RouterRedirectColor from '../RouterRedirectColor';
import { Link } from 'react-router-dom';

interface IColorPickerAppProps {
  current: chroma.Color;
}

interface IColorPickerAppState {
  redirectTo?: chroma.Color;
}

export default class ColorPickerApp extends React.Component<IColorPickerAppProps, IColorPickerAppState> {
  constructor(props: IColorPickerAppProps) {
    super(props);

    this.state = {

    };
  }

  @autobind
  onColorChange(color: chroma.Color) {
    this.setState((prevState) => ({
      ...prevState,
      redirectTo: color,
    }));
  }

  @autobind
  onRandomClick() {
    this.onColorChange(chroma.random());
  }

  render() {
    const {
      current,
    } = this.props;
    const {
      redirectTo,
    } = this.state;

    if (redirectTo) {
      return (
        <RouterRedirectColor color={redirectTo} />
      );
    }

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
            />
          </Card>
          <Card className="ColorPickerApp-sliders-container">
            <ColorPickerSliders
              color={current}
              onColorChange={this.onColorChange}
            />
            <div className="ColorPickerApp-random-container">
              <Link to="/random">
                <button
                  className="ColorPickerApp-random-button"
                  style={{
                    backgroundColor: current.css(),
                  }}
                >
                  <ContrastText bgColor={current}>Random</ContrastText>
                </button>
              </Link>
            </div>
          </Card>
        </div>
      </div>

    );
  }
}
