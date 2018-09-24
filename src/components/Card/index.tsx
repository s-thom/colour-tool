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
      const classes = [
        'card',
      ];
      classes.push(...`${classString} ${className}`.split(/\s+/));

      classString = classes.join(' ');
    }

    return (
      <div className={classString}>
        {children}
      </div>
    );
  }
}
