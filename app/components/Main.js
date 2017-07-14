import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Nav from './Nav';
import AddCampus from './AddCampus';
import AllCampus from './AllCampus';
import SingleCampus from './SingleCampus';
import AllStudent  from './allStudent';
import SingleStudent from './SingleStudent';
import AddStudent from './AddStudent';
import Home from './Home';
import Footer from './Footer';

import { fetchCampusesTC, fetchStudentsTC } from '../reducers';
import store from '../store';

export default class Main extends Component {

  componentDidMount() {
    store.dispatch(fetchCampusesTC());
    store.dispatch(fetchStudentsTC());
    this.unsubscribe = store.subscribe(
      () => this.setState(store.getState())
      );
    // console.log('MAIN', this.state);
  }

  render () {
    // console.log('RENDERING MAIN');
    return (
      <Router>
        <div id="main" className="container-fluid">
          <Nav />
          <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/addstudent" component={AddStudent} />
            <Route exact path="/addcampus" component={AddCampus} />
            <Route exact path="/campuses" component={AllCampus} />
            <Route exact path="/campuses/:campusId" component={SingleCampus} />
            <Route exact path="/students" component={AllStudent} />
            <Route
              exact path="/students/:studentId" render={
                (routerProps) => {
                  const studentId = routerProps.match.params.studentId;
                  const singleStudent = store.getState().students.find(
                    student => {
                      return student.id == studentId;
                    });
                  return <SingleStudent student={singleStudent} />;
                }} />
            <Redirect to="/home" />
          </Switch>
          <Footer />
        </div>
    </Router>
    );
  }
}
