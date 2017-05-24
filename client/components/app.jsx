import React from 'react';
import {render} from 'react-dom';
import Controller from './controller.jsx';
import Tagline from './tagline.jsx';
import TavernList from './tavernList.jsx';
import Details from './details.jsx';

export default class App extends React.Component {
  render () {
    return (
      <div className="container">
        <div id="logoText" className="row">
          <h1>PubCrawl</h1>
        </div>
        <div id="randomText" className="row">
          <Tagline/>
        </div>

        <div id="controls" className="row">
          <Controller/>
        </div>

        <div id="middler" className="row">
          <div className="col">
            <TavernList/>
          </div>

          <div className="col">
            <Details/>
          </div>
        </div>

        <div id="footer" className="row">
          other_options
        </div>
      </div>
    )
  }
};