import * as React from 'react';
import * as chroma from 'chroma-js';
import './index.css';
import ContrastText from '../ContrastText';

interface IColorSpanProps {
  className?: string;
  color: chroma.Color;
}

export default class ColorSpan extends React.Component<IColorSpanProps> {

  render() {
    const {
      children,
      className,
      color,
    } = this.props;

    let classString = 'ColorSpan';

    if (className) {
      classString = `${classString} ${className}`
        .split(/\s+/)
        .join(' ');
    }

    const useWhite = chroma.contrast(color, 'white') > 4.5;

    return (
      <span
        className={classString}
        style={{
          backgroundColor: color.css(),
        }}
      >
        <ContrastText
          bgColor={color}
        >{children}</ContrastText>
      </span>
    );
  }
}
