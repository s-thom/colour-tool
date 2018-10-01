import * as React from 'react';
import * as chroma from 'chroma-js';
import autobind from 'autobind-decorator';
import './index.css';
import { eventNames } from 'cluster';

interface IGradientSliderProps {
  startColor: chroma.Color;
  endColor: chroma.Color;
  startNumeric: number;
  endNumeric: number;
  current: number;
  onValueChanged: (newPercentage: number) => void;
}

interface IGradientSliderState {
  isMouseDown: boolean;
  isMouseIn: boolean;
}

export default class GradientSlider extends React.Component<IGradientSliderProps, IGradientSliderState> {
  gradientContainerRef: React.RefObject<HTMLDivElement>;

  constructor(props: IGradientSliderProps) {
    super(props);

    this.state = {
      isMouseDown: false,
      isMouseIn: false,
    };

    this.gradientContainerRef = React.createRef();
  }

  calculateValueForXPosition(x: number) {
    if (!this.gradientContainerRef.current) {
      return 0;
    }

    const elementBox = this.gradientContainerRef.current.getBoundingClientRect();

    const xOffset = x - elementBox.left;
    const percentage = xOffset / elementBox.width;
    const endValue = Math.floor(percentage * ((this.props.endNumeric - this.props.startNumeric) + 1));
    return endValue;
  }

  @autobind
  onInputValueChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.props.onValueChanged(event.target.valueAsNumber);
  }

  @autobind
  onGradientClick(event: React.MouseEvent<HTMLDivElement>) {
    this.props.onValueChanged(this.calculateValueForXPosition(event.clientX));
  }

  @autobind
  onGradientMouseDown(event: React.MouseEvent) {
    this.setState((prevState) => ({
      ...prevState,
      isMouseDown: true,
    }));

    this.props.onValueChanged(this.calculateValueForXPosition(event.clientX));
  }

  @autobind
  onGradientMouseUp() {
    this.setState((prevState) => ({
      ...prevState,
      isMouseDown: false,
    }));
  }

  @autobind
  onGradientMouseEnter(event: React.MouseEvent) {
    this.setState((prevState) => ({
      ...prevState,
      isMouseIn: true,
    }));

    // Event.buttons is odd if mouse is down
    // If mouse is up and is entering, then it must've been released outside
    if (!(event.buttons % 2)) {
      this.setState((prevState) => ({
        ...prevState,
        isMouseDown: false,
      }));
    }
  }

  @autobind
  onGradientMouseLeave() {
    this.setState((prevState) => ({
      ...prevState,
      isMouseIn: false,
    }));
  }

  @autobind
  onGradientMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const {
      isMouseDown,
      isMouseIn,
    } = this.state;

    if (isMouseDown && isMouseIn) {
      this.props.onValueChanged(this.calculateValueForXPosition(event.clientX));
    }
  }

  @autobind
  onGradientTouchStart(event: React.TouchEvent<HTMLDivElement>) {
    this.setState((prevState) => ({
      ...prevState,
      isMouseDown: true,
      isMouseIn: true,
    }));

    // Only use the first touch initiated on this element
    const usefulTouches = event.targetTouches;
    if (usefulTouches.length === 0) {
      return;
    }
    const usedTouch = usefulTouches.item(0);
    this.props.onValueChanged(this.calculateValueForXPosition(usedTouch.clientX));
  }

  @autobind
  onGradientTouchEnd() {
    this.setState((prevState) => ({
      ...prevState,
      isMouseDown: false,
      isMouseIn: false,
    }));
  }

  @autobind
  onGradientTouchCancel() {
    this.setState((prevState) => ({
      ...prevState,
      isMouseDown: false,
      isMouseIn: false,
    }));
  }

  @autobind
  onGradientTouchMove(event: React.TouchEvent<HTMLDivElement>) {
    const {
      isMouseDown,
      isMouseIn,
    } = this.state;

    // Only use the first touch initiated on this element
    const usefulTouches = event.targetTouches;
    if (usefulTouches.length === 0) {
      return;
    }
    const usedTouch = usefulTouches.item(0);

    if (isMouseDown && isMouseIn) {
      this.props.onValueChanged(this.calculateValueForXPosition(usedTouch.clientX));
    }
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
        <div
          className="GradientSlider-gradient-container"
          onMouseDown={this.onGradientMouseDown}
          onMouseUp={this.onGradientMouseUp}
          onMouseEnter={this.onGradientMouseEnter}
          onMouseLeave={this.onGradientMouseLeave}
          onMouseMove={this.onGradientMouseMove}
          onTouchStart={this.onGradientTouchStart}
          onTouchEnd={this.onGradientTouchEnd}
          onTouchMove={this.onGradientTouchMove}
          onTouchCancel={this.onGradientTouchCancel}
          ref={this.gradientContainerRef}
        >
          <span className="GradientSlider-indicator"
            style={{
              left: `${currentPercentage * 100}%`,
            }}
            title={current.toString()}
          />
          <div
            className="GradientSlider-gradient"
            style={{
              background: cssGradient,
            }}
          />
        </div>
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
