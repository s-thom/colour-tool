import * as React from 'react';
import * as chroma from 'chroma-js';
import './index.css';
import ContrastText from '../ContrastText';
import autobind from 'autobind-decorator';
import ColorLink from '../ColorLink';

interface ISwatchProps {
  className?: string;
  color: chroma.Color;
  showHex?: boolean;
  title?: string;
  onClick?: (event: React.MouseEvent) => void;
}

export default class Swatch extends React.Component<ISwatchProps> {

  @autobind
  onClick(event: React.MouseEvent) {
    if (this.props.onClick) {
      this.props.onClick(event);
    }
  }

  render() {
    const {
      className,
      color,
      onClick,
      showHex,
      title,
    } = this.props;

    let classString = 'Swatch';

    if (onClick) {
      classString += ' Swatch-clickable';
    }

    if (className) {
      classString = `${classString} ${className}`
        .split(/\s+/)
        .join(' ');
    }

    const dynamicProps: any = {};
    if (onClick) {
      dynamicProps.onClick = this.onClick;
    }

    return (
      <ColorLink to={color}>
        <div
          className={classString}
          style={{
            backgroundColor: color.css(),
          }}
          {...dynamicProps}
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
              {color.hex()}
            </ContrastText>
          )}
        </div>
      </ColorLink>
    );
  }
}
