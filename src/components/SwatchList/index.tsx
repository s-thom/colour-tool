import * as React from 'react';
import * as chroma from 'chroma-js';
import './index.css';
import Swatch from '../Swatch';
import autobind from 'autobind-decorator';

interface ISwatchListProps {
  colors: chroma.Color[];
  showHex?: boolean;
  onColorSelected?: (color: chroma.Color) => void;
}

export default class SwatchList extends React.Component<ISwatchListProps> {

  @autobind
  onSwatchClicked(color: chroma.Color) {
    if (this.props.onColorSelected) {
      this.props.onColorSelected(color);
    }
  }

  render() {
    const {
      colors,
      showHex,
    } = this.props;

    return (
      <div className="SwatchList">
        {colors.map((c, index) => (
          <Swatch
            key={`${index}${c.hex()}`}
            color={c}
            showHex={showHex}
            onClick={() => this.onSwatchClicked(c)}
          />
        ))}
      </div>
    );
  }
}
