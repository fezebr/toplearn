import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './../components/Layout/Layout';
import Login from './../components/Login/Login';
import Courses from './../components/courses/Courses';
import Archive from './../components/courses/Archive';
import SingleCoursePage from './../components/courses/SingleCoursePage';
import Register from './../components/Login/Register';
import MyNotFound from '../components/common/MyNotFound';
import Logout from './../components/Login/Logout';
import Profile from './../components/Profile/Profile';


const TopLearn = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Courses} />
                <Route path="/Login" component={Login} />
                <Route path="/Logout" component={Logout} />
                <Route path="/Profile" component={Profile} />
                <Route path="/Register" component={Register} />
                <Route path="/courses" component={Archive} />
                <Route path="/course/:id" component={SingleCoursePage} />
                <Route path="*" exact component={MyNotFound} />
            </Switch>
        </Layout>

    );
}

export default TopLearn;
