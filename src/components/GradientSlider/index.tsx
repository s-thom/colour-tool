import * as React from 'react';
import * as chroma from 'chroma-js';

interface IGradientSliderProps {
  start: chroma.Color;
  end: chroma.Color;
  currentPercentage: number;

  onValueChanged: (newPercentage: number) => void;
}

export default class GradientSlider extends React.Component<IGradientSliderProps> {
  render() {
    const {
      start,
      end,
      currentPercentage,
      onValueChanged,
    } = this.props;

    const cssGradient = `linear-gradient(0.25turn, ${start.hex()}, ${end.hex()})`;

    return (
      <div className="GradientSlider">
        <span className="GradientSlider-indicator">{Math.floor(currentPercentage * 100)}%</span>
        <div
          className="GradientSlider-gradient"
          style={{
            background: cssGradient,
          }}
        />
        <div className="GradientSlider-input-container">
          <input type="text" className="GradientSlider-input"/>
        </div>
      </div>
    );
  }
}
