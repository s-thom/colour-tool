import * as React from 'react';
import * as chroma from 'chroma-js';
import './index.css';
import autobind from 'autobind-decorator';
import Swatch from '../Swatch';

interface IColorSimilarOptionsProps {
  color: chroma.Color;
  onColorChange: (color: chroma.Color) => void;
}

export default class ColorSimilarOptions extends React.Component<IColorSimilarOptionsProps> {

  @autobind
  onColorChange(color: chroma.Color) {
    this.props.onColorChange(color);
  }

  render() {
    const {
      color,
    } = this.props;

    const satNeg2 = color.saturate(-2);
    const satNeg1 = color.saturate(-1);
    const satPos1 = color.saturate(1);
    const satPos2 = color.saturate(2);

    const brightNeg2 = color.brighten(-2);
    const brightNeg1 = color.brighten(-1);
    const brightPos1 = color.brighten(1);
    const brightPos2 = color.brighten(2);

    return (
      <div
        className="ColorSimilarOptions"
      >
        <div className="ColorSimilarOptions-row">
          <h2 className="ColorSimilarOptions-heading">Saturation</h2>
          <div className="ColorSimilarOptions-swatches">
            <Swatch color={satNeg2} showHex={true} />
            <Swatch color={satNeg1} showHex={true} />
            <Swatch color={color} showHex={true} />
            <Swatch color={satPos1} showHex={true} />
            <Swatch color={satPos2} showHex={true} />
          </div>
        </div>
        <div className="ColorSimilarOptions-row">
          <h2 className="ColorSimilarOptions-heading">Brightness</h2>
          <div className="ColorSimilarOptions-swatches">
            <Swatch color={brightNeg2} showHex={true} />
            <Swatch color={brightNeg1} showHex={true} />
            <Swatch color={color} showHex={true} />
            <Swatch color={brightPos1} showHex={true} />
            <Swatch color={brightPos2} showHex={true} />
          </div>
        </div>
      </div>
    );
  }
}
