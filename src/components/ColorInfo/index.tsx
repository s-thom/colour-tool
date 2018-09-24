import * as React from 'react';
import * as chroma from 'chroma-js';
import autobind from 'autobind-decorator';
import './index.css';
import ColorSpan from '../ColorSpan';

interface IColorInfoProps {
  color: chroma.Color;
  onColorChange: (color: chroma.Color) => void;
}

export default class ColorInfo extends React.Component<IColorInfoProps> {

  @autobind
  onColorChange(color: chroma.Color) {
    this.props.onColorChange(color);
  }

  render() {
    const {
      color,
    } = this.props;

    const rgbArr = color.rgba();
    const hslArr = color.hsl();
    const hsvArr = color.hsv();
    const labArr = color.lab();

    const redColor = chroma.rgb(rgbArr[0], 0, 0);
    const greenColor = chroma.rgb(0, rgbArr[1], 0);
    const blueColor = chroma.rgb(0, 0, rgbArr[2]);
    const alphaColor = chroma('white').alpha(rgbArr[3]);
    const hueColor = chroma.hsl(hslArr[0] || 0, 1, 0.5);
    const satColor = chroma.hsl(0, 0, hslArr[1]);
    const lumColor = chroma.hsl(0, 0, hslArr[2]);
    const sat2Color = chroma.hsv(0, 0, hsvArr[1]);
    const valColor = chroma.hsv(0, 0, hsvArr[2]);
    const LColor = chroma.lab(labArr[0], 0, 0);
    const aColor = chroma.lab(50, labArr[1], 0);
    const bColor = chroma.lab(50, 0, labArr[2]);

    return (
      <div className="ColorInfo">
        <div className="ColorInfo-table-container">
          <table className="ColorInfo-table">
            <tr>
              <td>Hex:</td>
              <td>
                R: <ColorSpan color={redColor}>{rgbArr[0].toString(16)}</ColorSpan>
                G: <ColorSpan color={greenColor}>{rgbArr[1].toString(16)}</ColorSpan>
                B: <ColorSpan color={blueColor}>{rgbArr[2].toString(16)}</ColorSpan>
              </td>
              <td>
                <ColorSpan color={color}>{color.hex()}</ColorSpan>
                <ColorSpan color={color}>0x{(color as any).num()}</ColorSpan>
                </td>
            </tr>
            <tr>
              <td>RGB:</td>
              <td>
                R: <ColorSpan color={redColor}>{rgbArr[0]}</ColorSpan>
                G: <ColorSpan color={greenColor}>{rgbArr[1]}</ColorSpan>
                B: <ColorSpan color={blueColor}>{rgbArr[2]}</ColorSpan>
              </td>
              <td><ColorSpan color={color}>{`rgb(${rgbArr[0]}, ${rgbArr[1]}, ${rgbArr[2]})`}</ColorSpan></td>
            </tr>
            <tr>
              <td>HSL:</td>
              <td>
                H: <ColorSpan color={hueColor}>{(hslArr[0] || 0).toFixed(2)}</ColorSpan>
                S: <ColorSpan color={satColor}>{(hslArr[1]).toFixed(2)}</ColorSpan>
                L: <ColorSpan color={lumColor}>{(hslArr[2]).toFixed(2)}</ColorSpan>
              </td>
              <td><ColorSpan color={color}>{`hsl(${(hslArr[0] || 0).toFixed(2)}deg, ${hslArr[1].toFixed(2)}%, ${hslArr[2].toFixed(2)}%)`}</ColorSpan></td>
            </tr>
            <tr>
              <td>HSV:</td>
              <td>
                H: <ColorSpan color={hueColor}>{(hsvArr[0] || 0).toFixed(2)}</ColorSpan>
                S: <ColorSpan color={sat2Color}>{(hsvArr[1]).toFixed(2)}</ColorSpan>
                V: <ColorSpan color={valColor}>{(hsvArr[2]).toFixed(2)}</ColorSpan>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Lab:</td>
              <td>
                L: <ColorSpan color={LColor}>{(labArr[0]).toFixed(2)}</ColorSpan>
                a: <ColorSpan color={aColor}>{(labArr[1]).toFixed(2)}</ColorSpan>
                b: <ColorSpan color={bColor}>{(labArr[2]).toFixed(2)}</ColorSpan>
              </td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
