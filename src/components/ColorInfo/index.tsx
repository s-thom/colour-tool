import * as React from 'react';
import * as chroma from 'chroma-js';
import autobind from 'autobind-decorator';
import './index.css';

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

    return (
      <div className="ColorInfo">
        <div className="ColorInfo-css-container">
          <table>
            <tbody>
              <tr>
                <td>Hex:</td>
                <td>{color.hex()}</td>
              </tr>
              <tr>
                <td>RGB:</td>
                <td>{`rgb(${rgbArr[0]}, ${rgbArr[1]}, ${rgbArr[2]})`}</td>
              </tr>
              <tr>
                <td>RGBA:</td>
                <td>{`rgba(${rgbArr[0]}, ${rgbArr[1]}, ${rgbArr[2]}, ${rgbArr[3]})`}</td>
              </tr>
              <tr>
                <td>HSL:</td>
                <td>{`hsl(${(hslArr[0] || 0).toFixed(2)}, ${hslArr[1].toFixed(2)}, ${hslArr[2].toFixed(2)})`}</td>
              </tr>
              <tr>
                <td>HSV:</td>
                <td>{`rgb(${(hsvArr[0] || 0).toFixed(2)}, ${hsvArr[1].toFixed(2)}, ${hsvArr[2].toFixed(2)})`}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
