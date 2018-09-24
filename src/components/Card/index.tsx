import * as React from 'react';
import './index.css';

interface ICardProps {
  className?: string;
}

export default class Card extends React.Component<ICardProps> {

  render() {
    const {
      children,
      className,
    } = this.props;

    let classString = 'Card';

    if (className) {
      classString = `${classString} ${className}`
        .split(/\s+/)
        .join(' ');
    }

    return (
      <div className={classString}>
        {children}
      </div>
    );
  }
}
