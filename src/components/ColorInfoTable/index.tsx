import * as React from 'react';
import * as chroma from 'chroma-js';
import autobind from 'autobind-decorator';
import './index.css';
import ColorSpan from '../ColorSpan';

interface IColorInfoTableProps {
  color: chroma.Color;
}

export default class ColorInfoTable extends React.Component<IColorInfoTableProps> {

  render() {
    const {
      color,
    } = this.props;

    const rgbArr = color.rgba();
    const hslArr = color.hsl();
    const hsvArr = color.hsv();
    const labArr = color.lab();
    const hclArr = color.hcl();
    const cmykArr = color.cmyk();

    // RGB(A)
    const redColor = chroma.rgb(rgbArr[0], 0, 0);
    const greenColor = chroma.rgb(0, rgbArr[1], 0);
    const blueColor = chroma.rgb(0, 0, rgbArr[2]);
    const alphaColor = chroma('white').alpha(rgbArr[3]);
    // HSV/HSL
    const hueColor = chroma.hsl(hslArr[0] || 0, 1, 0.5);
    const satColor = chroma.hsl(0, 0, hslArr[1]);
    const lumColor = chroma.hsl(0, 0, hslArr[2]);
    const sat2Color = chroma.hsv(0, 0, hsvArr[1]);
    const valColor = chroma.hsv(0, 0, hsvArr[2]);
    // Lab
    const LColor = chroma.lab(labArr[0], 0, 0);
    const aColor = chroma.lab(50, labArr[1], 0);
    const bColor = chroma.lab(50, 0, labArr[2]);
    // HCL
    const hue2Color = chroma.lch(50, 50, hclArr[0]);
    const chromaColor = chroma.lch(50, hclArr[1], hclArr[0]);
    const ligColor = chroma.lch(hclArr[2], 0, 0);
    // CMYK
    const cColor = chroma.cmyk(cmykArr[0], 0, 0, 0);
    const mColor = chroma.cmyk(0, cmykArr[1], 0, 0);
    const yColor = chroma.cmyk(0, 0, cmykArr[2], 0);
    const kColor = chroma.cmyk(0, 0, 0, cmykArr[3]);

    return (
      <div className="ColorInfo">
        <div className="ColorInfo-table-container">
          <table className="ColorInfo-table">
            <tr>
              <td>Hex:</td>
              <td>
                R: <ColorSpan color={redColor}>{rgbArr[0].toString(16)}</ColorSpan>
              </td>
              <td>
                G: <ColorSpan color={greenColor}>{rgbArr[1].toString(16)}</ColorSpan>
              </td>
              <td>
                B: <ColorSpan color={blueColor}>{rgbArr[2].toString(16)}</ColorSpan>
              </td>
              <td>
                <ColorSpan color={color}>{color.hex()}</ColorSpan>, int <ColorSpan color={color}>{(color as any).num()}</ColorSpan>
              </td>
            </tr>
            <tr>
              <td>RGB:</td>
              <td>
                R: <ColorSpan color={redColor}>{rgbArr[0]}</ColorSpan>
              </td>
              <td>
                G: <ColorSpan color={greenColor}>{rgbArr[1]}</ColorSpan>
              </td>
              <td>
                B: <ColorSpan color={blueColor}>{rgbArr[2]}</ColorSpan>
              </td>
              <td><ColorSpan color={color}>{`rgb(${rgbArr[0]}, ${rgbArr[1]}, ${rgbArr[2]})`}</ColorSpan></td>
            </tr>
            <tr>
              <td>HSL:</td>
              <td>
                H: <ColorSpan color={hueColor}>{(hslArr[0] || 0).toFixed(2)}</ColorSpan>
              </td>
              <td>
                S: <ColorSpan color={satColor}>{(hslArr[1]).toFixed(2)}</ColorSpan>
              </td>
              <td>
                L: <ColorSpan color={lumColor}>{(hslArr[2]).toFixed(2)}</ColorSpan>
              </td>
              <td>
                <ColorSpan color={color}>{color.css('hsl')}</ColorSpan>
              </td>
            </tr>
            <tr>
              <td>HSV:</td>
              <td>
                H: <ColorSpan color={hueColor}>{(hsvArr[0] || 0).toFixed(2)}</ColorSpan>
              </td>
              <td>
                S: <ColorSpan color={sat2Color}>{(hsvArr[1]).toFixed(2)}</ColorSpan>
              </td>
              <td>
                V: <ColorSpan color={valColor}>{(hsvArr[2]).toFixed(2)}</ColorSpan>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Lab:</td>
              <td>
                L: <ColorSpan color={LColor}>{(labArr[0]).toFixed(2)}</ColorSpan>
              </td>
              <td>
                a: <ColorSpan color={aColor}>{(labArr[1]).toFixed(2)}</ColorSpan>
              </td>
              <td>
                b: <ColorSpan color={bColor}>{(labArr[2]).toFixed(2)}</ColorSpan>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>HCL/LCh:</td>
              <td>
                H: <ColorSpan color={hue2Color}>{(hclArr[0]).toFixed(2)}</ColorSpan>
              </td>
              <td>
                C: <ColorSpan color={chromaColor}>{(hclArr[1]).toFixed(2)}</ColorSpan>
              </td>
              <td>
                L: <ColorSpan color={ligColor}>{(hclArr[2]).toFixed(2)}</ColorSpan>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>CMYK:</td>
              <td>
                C: <ColorSpan color={cColor}>{(cmykArr[0]).toFixed(2)}</ColorSpan>
              </td>
              <td>
                M: <ColorSpan color={mColor}>{(cmykArr[1]).toFixed(2)}</ColorSpan>
              </td>
              <td>
                Y: <ColorSpan color={yColor}>{(cmykArr[2]).toFixed(2)}</ColorSpan>
              </td>
              <td>
                K: <ColorSpan color={kColor}>{(cmykArr[3]).toFixed(2)}</ColorSpan>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
