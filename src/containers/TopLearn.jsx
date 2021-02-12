import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import { Route, Switch } from 'react-router-dom';
import Layout from './../components/Layout/Layout';
import Login from './../components/Login/Login';
import Courses from './../components/courses/Courses';
import Archive from './../components/courses/Archive';
import CoursesContext from '../context/CoursesContext';


const TopLearn = (props) => {




    return (
   
            <Layout>
                <Switch>
                    <Route path="/" exact component={Courses} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Archive" component={Archive} />
                    
                </Switch>
            </Layout>
    
    );
}

export default TopLearn;
