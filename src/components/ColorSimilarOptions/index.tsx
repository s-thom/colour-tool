import * as React from 'react';
import * as chroma from 'chroma-js';
import './index.css';
import autobind from 'autobind-decorator';
import Swatch from '../Swatch';
import SwatchList from '../SwatchList';

interface IColorSimilarOptionsProps {
  color: chroma.Color;
}

export default class ColorSimilarOptions extends React.Component<IColorSimilarOptionsProps> {
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
          <SwatchList
            colors={[
              satNeg2,
              satNeg1,
              color,
              satPos1,
              satPos2,
            ]}
            showHex={true}
          />
        </div>
        <div className="ColorSimilarOptions-row">
          <h2 className="ColorSimilarOptions-heading">Brightness</h2>
          <div className="ColorSimilarOptions-swatches">
            <SwatchList
              colors={[
                brightNeg2,
                brightNeg1,
                color,
                brightPos1,
                brightPos2,
              ]}
              showHex={true}
            />
          </div>
        </div>
      </div>
    );
  }
}
