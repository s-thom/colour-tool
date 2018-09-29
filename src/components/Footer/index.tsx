import * as React from 'react';
import './index.css';
import github from './github.svg';

export default class Footer extends React.Component {

  render() {

    return (
      <footer className="Footer">
        <span>Made by </span>
        <a className="Footer-link" href="https://sthom.kiwi">Stuart Thomson</a>
        <span>. Uses </span>
        <a className="Footer-link" href="https://gka.github.io/chroma.js/">chroma.js</a>
        <span>. </span>
        <a className="Footer-link" href="https://github.com/s-thom/colour-tool">
          <img src={github} className="Footer-logo" alt="logo" />
          Source Code
        </a>
      </footer>
    );
  }
}
