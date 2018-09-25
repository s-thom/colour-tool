import * as React from 'react';
import * as chroma from 'chroma-js';
import './index.css';
import ContrastText from '../ContrastText';

interface ISwatchProps {
  color: chroma.Color;
  showHex?: boolean;
  title?: string;
}

export default class Swatch extends React.Component<ISwatchProps> {
  render() {
    const {
      color,
      showHex,
      title,
    } = this.props;

    return (
      <div
        className="Swatch"
        style={{
          backgroundColor: color.css(),
        }}
      >
        {title && (
          <ContrastText
            bgColor={color}
            className="Swatch-title"
          >
            {title}
          </ContrastText>
        )}
        {showHex && (
          <ContrastText
            bgColor={color}
            className="Swatch-info"
          >
            {color.css()}
          </ContrastText>
        )}
      </div>
    );
  }
}
