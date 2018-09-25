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

    const useWhite = chroma.contrast(bgColor, COLOR_LIGHT) > 4.5;

    return (
      <span
        className={classString}
        style={{
          color: useWhite ? COLOR_LIGHT.css() : COLOR_DARK.css(),
        }}
      >
        {children}
      </span>
    );
  }
}
