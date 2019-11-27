import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Router from './Route';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Topics from '../pages/Topics';
import Curiosity from '../pages/Curiosity';
import Text from '../pages/Text';

export default function Index() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />

      <Router path="/dashboard" component={Dashboard} />
      <Router path="/topics" component={Topics} />
      <Router path="/curiosity" component={Curiosity} />
      <Router path="/text" component={Text} />
    </Switch>
  );
}
