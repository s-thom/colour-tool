import * as React from 'react';
import * as chroma from 'chroma-js';
import Card from '../../components/Card';
import Swatch from '../../components/Swatch';
import './index.css';

const color404 = chroma.hex('#440044');

export default class Page404 extends React.Component {
  render() {

    return (
      <div className="Page404">
        <div
          className="Page404-background"
          style={{
            backgroundColor: color404.css(),
          }}
        />
        <div className="Page404-content">
          <Card className="Page404-card">
            <h1>404</h1>
            <h2>Page not found</h2>
            <div className="Page404-404-container">
              <Swatch
                color={color404}
                showHex={true}
              />
            </div>
          </Card>
        </div>
      </div>
    );
  }
}
