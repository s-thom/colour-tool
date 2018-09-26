import * as React from 'react';
import * as chroma from 'chroma-js';
import './index.css';
import ColorSpan from '../ColorSpan';

export interface IColorPart {
  color: chroma.Color;
  name: string;
  text: string;
}

interface IColorInfoTableRowProps {
  color: chroma.Color;
  parts: IColorPart[];
  stringified?: string;
  title: string;
}

export default class ColorInfoTableRow extends React.Component<IColorInfoTableRowProps> {
  render() {
    const {
      color,
      parts,
      stringified,
      title,
    } = this.props;

    const partElements = parts.map(p => (
      <span className="ColorInfoTableRow-part" key={p.name}>
        <span className="ColorInfoTableRow-part-name">{p.name}</span>
        <span>: </span>
        <ColorSpan color={p.color} className="ColorInfoTableRow-part-text">{p.text}</ColorSpan>
      </span>
    ));

    return (
      <div className="ColorInfoTableRow">
        <span className="ColorInfoTableRow-title">{title}</span>
        {stringified && (
          <ColorSpan color={color} className="ColorInfoTableRow-color-string">{stringified}</ColorSpan>
        )}
        <div className="ColorInfoTableRow-parts">
          {partElements}
        </div>
      </div>
    );
  }
}
