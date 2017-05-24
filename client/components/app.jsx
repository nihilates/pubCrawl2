import React from 'react';
import {render} from 'react-dom';

export default class App extends React.Component {
  render () {
    return (
      <div className="container">
        <div id="topper" className="row">
        top
        </div>

        <div id="middler" className="row">
          <div className="col-md-6">
          left
          </div>

          <div className="col-md-6">
          right
          </div>
        </div>

        <div id="footer" className="row">
        bottom
        </div>
      </div>
    )
  }
};