import * as React from 'react';
import * as chroma from 'chroma-js';
import autobind from 'autobind-decorator';

interface IGradientSliderProps {
  startColor: chroma.Color;
  endColor: chroma.Color;
  startNumeric: number;
  endNumeric: number;
  current: number;
  onValueChanged: (newPercentage: number) => void;
}

export default class GradientSlider extends React.Component<IGradientSliderProps> {

  @autobind
  onInputValueChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.props.onValueChanged(event.target.valueAsNumber);
  }

  @autobind
  onGradientClick(event: React.MouseEvent<HTMLDivElement>) {
    const elementBox = (event.target as HTMLDivElement).getBoundingClientRect();

    const xOffset = event.clientX - elementBox.left;
    const percentage = xOffset / elementBox.width;
    const endValue = Math.floor(percentage * (this.props.endNumeric - this.props.startNumeric));

    this.props.onValueChanged(endValue);
  }

  render() {
    const {
      startColor,
      endColor,
      startNumeric,
      endNumeric,
      current,
      onValueChanged,
    } = this.props;

    const currentPercentage = (current - startNumeric) / (endNumeric - startNumeric);

    const cssGradient = `linear-gradient(0.25turn, ${startColor.css()}, ${endColor.css()})`;

    return (
      <div className="GradientSlider">
        <span className="GradientSlider-indicator"
          style={{
            left: `${currentPercentage * 100}%`,
          }}
        >{current}</span>
        <div
          className="GradientSlider-gradient"
          style={{
            background: cssGradient,
          }}
          onClick={this.onGradientClick}
        />
        <div className="GradientSlider-input-container">
          <input
            type="number"
            className="GradientSlider-input"
            value={current}
            onChange={this.onInputValueChange}
          />
        </div>
      </div>
    );
  }
}
