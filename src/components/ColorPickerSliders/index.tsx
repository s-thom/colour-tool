import * as React from 'react';
import * as chroma from 'chroma-js';
import autobind from 'autobind-decorator';
import './index.css';
import GradientSlider from '../GradientSlider';

interface IColorPickerSlidersProps {
  color: chroma.Color;
  onColorChange: (color: chroma.Color) => void;
}

export default class ColorPickerSliders extends React.Component<IColorPickerSlidersProps> {

  @autobind
  onRedChange(value: number) {
    this.props.onColorChange(this.props.color.set('rgb.r', value));
  }

  @autobind
  onGreenChange(value: number) {
    this.props.onColorChange(this.props.color.set('rgb.g', value));
  }

  @autobind
  onBlueChange(value: number) {
    this.props.onColorChange(this.props.color.set('rgb.b', value));
  }

  render() {
    const {
      color,
    } = this.props;

    const redStart = color.set('rgb.r', 0);
    const redEnd = color.set('rgb.r', 255);
    const greenStart = color.set('rgb.g', 0);
    const greenEnd = color.set('rgb.g', 255);
    const blueStart = color.set('rgb.b', 0);
    const blueEnd = color.set('rgb.b', 255);

    return (
      <div className="ColorPickerSliders">
        <GradientSlider
          startColor={redStart}
          startNumeric={0}
          endColor={redEnd}
          endNumeric={255}
          current={color.get('rgb.r')}
          onValueChanged={this.onRedChange}
        />
        <GradientSlider
          startColor={greenStart}
          startNumeric={0}
          endColor={greenEnd}
          endNumeric={255}
          current={color.get('rgb.g')}
          onValueChanged={this.onGreenChange}
        />
        <GradientSlider
          startColor={blueStart}
          startNumeric={0}
          endColor={blueEnd}
          endNumeric={255}
          current={color.get('rgb.b')}
          onValueChanged={this.onBlueChange}
        />
      </div>
    );
  }
}
