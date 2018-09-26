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
      <td key={p.name}>
        {p.name}: <ColorSpan color={p.color}>{p.text}</ColorSpan>
      </td>
    ));

    return (
      <tr>
        <td>{title}:</td>
        {partElements}
        {stringified && (
          <td><ColorSpan color={color}>{stringified}</ColorSpan></td>
        )}
      </tr>
    );
  }
}
