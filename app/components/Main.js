import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import AllCampus from './AllCampus';
import SingleCampus from './SingleCampus';
import AllStudent  from './allStudent';
import SingleStudent from './SingleStudent';

export default class Main extends Component {

  render () {
    console.log('IN MAIN');
    return (
      <Router>
        <div id="main" className="container-fluid">
          <Nav />
          <Switch>
            <Route path= "/" component={AllCampus} />
            <Route path="/campus/:campusid" component={SingleCampus} />
            <Route path="/students" component={AllStudent} />
            <Route path="/student/:studentId" component={SingleStudent} />
          </Switch>
        </div>
    </Router>
    );
  }
}
