import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../Containers/Navbar';
import Home from '../Containers/Home';
import ApiWeather from '../Containers/APIweather';
import ApiMessage from '../Containers/APImessage';

export default () => (
  <BrowserRouter>
    <div>
    <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/apiweather" component={ApiWeather} />
        <Route exact path="/ApiMessage" component={ApiMessage} />
      </Switch>
    </div>
  </BrowserRouter>
)