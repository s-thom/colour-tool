import * as React from 'react';
import * as chroma from 'chroma-js';
import autobind from 'autobind-decorator';
import './index.css';
import Card from '../../components/Card';
import ColorPickerSliders from '../../components/ColorPickerSliders';
import ColorInfoTable from '../../components/ColorInfoTable';
import ColorSimilarOptions from '../../components/ColorSimilarOptions';
import ContrastText from '../../components/ContrastText';
import RouterRedirectColor from '../../routes/RouterRedirectColor';
import { Link } from 'react-router-dom';

interface IPageColorProps {
  current: chroma.Color;
  onColorChange: (color: chroma.Color) => void;
}

export default class PageColor extends React.Component<IPageColorProps> {
  constructor(props: IPageColorProps) {
    super(props);

    this.state = {

    };
  }

  @autobind
  onColorChange(color: chroma.Color) {
    this.props.onColorChange(color);
  }

  @autobind
  onRandomClick() {
    this.onColorChange(chroma.random());
  }

  render() {
    const {
      current,
    } = this.props;

    return (
      <div className="PageColor">
        <div
          className="PageColor-background"
          style={{
            backgroundColor: current.css(),
          }}
        />
        <div className="PageColor-content">
          <Card className="PageColor-info-container">
            <ColorInfoTable
              color={current}
            />
            <ColorSimilarOptions
              color={current}
            />
          </Card>
          <Card className="PageColor-sliders-container">
            <ColorPickerSliders
              color={current}
              onColorChange={this.onColorChange}
            />
            <div className="PageColor-random-container">
              <Link to="/random">
                <button
                  className="PageColor-random-button"
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
