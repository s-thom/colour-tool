import * as React from 'react';
import * as chroma from 'chroma-js';
import './index.css';

interface IContrastTextProps {
  bgColor: chroma.Color;
  className?: string;
}

const COLOR_LIGHT = chroma('white')
  .alpha(0.95);

const COLOR_DARK = chroma('black')
  .alpha(0.9);

export default class ContrastText extends React.Component<IContrastTextProps> {
  render() {
    const {
      bgColor,
      children,
      className,
    } = this.props;

    let classString = 'ContrastText';

    if (className) {
      classString = `${classString} ${className}`
        .split(/\s+/)
        .join(' ');
    }

    const whiteContrast = chroma.contrast(bgColor, COLOR_LIGHT);
    const blackContrast = chroma.contrast(bgColor, COLOR_DARK);
    const textColor = whiteContrast > blackContrast ? COLOR_LIGHT : COLOR_DARK;

    return (
      <span
        className={classString}
        style={{
          color: textColor.css(),
        }}
      >
        {children}
      </span>
    );
  }
}
