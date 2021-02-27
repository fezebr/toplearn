import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './../components/Layout/Layout';
import Login from './../components/Login/Login';
import Courses from './../components/courses/Courses';
import Archive from './../components/courses/Archive';
import SingleCoursePage from './../components/courses/SingleCoursePage';
import Register from './../components/Login/Register';
import MyNotFound from '../components/common/MyNotFound';
import Logout from './../components/Login/Logout';
import Profile from './../components/Profile/Profile';
import { userContext } from '../context/context';
import PrivateLayout from '../components/Layout/PrivateLayout.jsx';
import Dashboard from './../components/admin/Dashboard';
import CourseTable from './../components/admin/CourseTable';


const TopLearn = () => {
    const context = useContext(userContext)
    const { User } = context
    return (
        <Switch>
            <Route path={["/dashboard"]}>
                <PrivateLayout>
                <Route path="/dashboard/courses" exact render={() => User && User.isAdmin ? (<CourseTable/>) : (<Redirect to ="/"/>)} />
                <Route path="/dashboard" exact render={() => User && User.isAdmin ? (<Dashboard/>) : (<Redirect to ="/"/>)} />
                </PrivateLayout>
            </Route>
            <Route path={["/"]}>
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
            </Route>
        </Switch>

    );
}

export default TopLearn;
