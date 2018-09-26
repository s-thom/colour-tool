import * as React from 'react';
import * as chroma from 'chroma-js';
import './index.css';
import ColorInfoTableRow, {
  IColorPart,
} from '../ColorInfoTableRow';

interface IColorInfoTableProps {
  color: chroma.Color;
}

export default class ColorInfoTable extends React.Component<IColorInfoTableProps> {

  render() {
    const {
      color,
    } = this.props;

    // RGB(A)
    const rgbArr = color.rgba();
    const hexParts: IColorPart[] = [
      {
        color: chroma.rgb(rgbArr[0], 0, 0),
        name: 'R',
        text: rgbArr[0].toString(16),
      },
      {
        color: chroma.rgb(0, rgbArr[1], 0),
        name: 'G',
        text: rgbArr[1].toString(16),
      },
      {
        color: chroma.rgb(0, 0, rgbArr[2]),
        name: 'B',
        text: rgbArr[2].toString(16),
      },
    ];
    const rgbParts: IColorPart[] = [
      {
        color: chroma.rgb(rgbArr[0], 0, 0),
        name: 'R',
        text: rgbArr[0].toString(),
      },
      {
        color: chroma.rgb(0, rgbArr[1], 0),
        name: 'G',
        text: rgbArr[1].toString(),
      },
      {
        color: chroma.rgb(0, 0, rgbArr[2]),
        name: 'B',
        text: rgbArr[2].toString(),
      },
    ];
    // HSV/HSL
    const hslArr = color.hsl();
    const hsvArr = color.hsv();
    const hslParts: IColorPart[] = [
      {
        color: chroma.hsl(hslArr[0] || 0, 1, 0.5),
        name: 'H',
        text: (hslArr[0] || 0).toFixed(2),
      },
      {
        color: chroma.hsl(0, 0, hslArr[1]),
        name: 'S',
        text: (hsvArr[1]).toFixed(2),
      },
      {
        color: chroma.hsl(0, 0, hslArr[2]),
        name: 'L',
        text: (hsvArr[2]).toFixed(2),
      },
    ];
    const hsvParts: IColorPart[] = [
      {
        color: chroma.hsl(hsvArr[0] || 0, 1, 0.5),
        name: 'H',
        text: (hsvArr[0] || 0).toFixed(2),
      },
      {
        color: chroma.hsv(0, 0, hsvArr[1]),
        name: 'S',
        text: hsvArr[1].toFixed(2),
      },
      {
        color: chroma.hsv(0, 0, hsvArr[2]),
        name: 'V',
        text: hsvArr[2].toFixed(2),
      },
    ];
    // Lab
    const labArr = color.lab();
    const labParts: IColorPart[] = [
      {
        color: chroma.lab(labArr[0], 0, 0),
        name: 'L',
        text: (labArr[0]).toFixed(2),
      },
      {
        color: chroma.lab(50, labArr[1], 0),
        name: 'a',
        text: (labArr[1]).toFixed(2),
      },
      {
        color: chroma.lab(50, 0, labArr[2]),
        name: 'b',
        text: (labArr[2]).toFixed(2),
      },
    ];
    // HCL
    const hclArr = color.hcl();
    const hclParts: IColorPart[] = [
      {
        color: chroma.lch(50, 50, hclArr[0]),
        name: 'H',
        text: (hclArr[0]).toFixed(2),
      },
      {
        color: chroma.lch(50, hclArr[1], hclArr[0]),
        name: 'C',
        text: (hclArr[1]).toFixed(2),
      },
      {
        color: chroma.lab(50, 0, labArr[2]),
        name: 'L',
        text: (hclArr[2]).toFixed(2),
      },
    ];
    // CMYK
    const cmykArr = color.cmyk();
    const cmykParts: IColorPart[] = [
      {
        color: chroma.cmyk(cmykArr[0], 0, 0, 0),
        name: 'C',
        text: (cmykArr[0]).toFixed(2),
      },
      {
        color: chroma.cmyk(0, cmykArr[1], 0, 0),
        name: 'M',
        text: (cmykArr[1]).toFixed(2),
      },
      {
        color: chroma.cmyk(0, 0, cmykArr[2], 0),
        name: 'Y',
        text: (cmykArr[2]).toFixed(2),
      },
      {
        color: chroma.cmyk(0, 0, 0, cmykArr[3]),
        name: 'K',
        text: (cmykArr[3]).toFixed(2),
      },
    ];

    return (
      <div className="ColorInfo">
        <div className="ColorInfo-table-container">
          <table className="ColorInfo-table">
            <tbody>
              <ColorInfoTableRow
                color={color}
                parts={hexParts}
                stringified={color.hex()}
                title="Hex"
              />
              <ColorInfoTableRow
                color={color}
                parts={rgbParts}
                stringified={color.css()}
                title="RGB"
              />
              <ColorInfoTableRow
                color={color}
                parts={hslParts}
                stringified={color.css('hsl')}
                title="HSL"
              />
              <ColorInfoTableRow
                color={color}
                parts={hsvParts}
                title="HSV"
              />
              <ColorInfoTableRow
                color={color}
                parts={labParts}
                title="Lab"
              />
              <ColorInfoTableRow
                color={color}
                parts={hclParts}
                title="HCL"
              />
              <ColorInfoTableRow
                color={color}
                parts={cmykParts}
                title="CMYK"
              />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
