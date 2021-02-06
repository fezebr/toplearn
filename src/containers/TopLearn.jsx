import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
import Layout from './../components/Layout/Layout';
import Login from './../components/Login/Login';
import Courses from './../components/courses/Courses';

const TopLearn = (props) => {
 
    return (
        <Layout>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/Login"  component={Login}/>
              <Route path="/Courses"  component={Courses}/>
          </Switch>
        </Layout>
    );
}

export default TopLearn;
