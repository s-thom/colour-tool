import * as React from 'react';
import * as chroma from 'chroma-js';
import Card from '../../components/Card';
import Swatch from '../../components/Swatch';
import './index.css';
import { arrayRandom } from '../../util';

const color440044 = chroma.hex('#440044');
const color404404 = chroma.hex('#404404');
const color400004 = chroma.hex('#400004');
const color404000 = chroma.hex('#404000');
// const color000404 = chroma.hex('#000404');
const colorList = [
  color404404,
  color440044,
  color400004,
  color404000,
  // color000404,
];

export default class Page404 extends React.Component {
  render() {
    const color = arrayRandom(colorList);

    return (
      <div className="Page404">
        <div
          className="Page404-background"
          style={{
            backgroundColor: color.css(),
          }}
        />
        <div className="Page404-content">
          <Card className="Page404-card">
            <h1>404</h1>
            <h2>Page not found</h2>
            <div className="Page404-404-container">
              <Swatch
                color={color}
                showHex={true}
              />
            </div>
          </Card>
        </div>
      </div>
    );
  }
}
