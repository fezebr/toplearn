import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './../components/Layout/Layout';
import Login from './../components/Login/Login';
import Courses from './../components/courses/Courses';
import Archive from './../components/courses/Archive';
import SingleCoursePage from './../components/courses/SingleCoursePage';
import Register from './../components/Login/Register';
import MyNotFound from '../components/common/MyNotFound';
import { decodeToken } from './../components/utils/decodeToken';
import Logout from './../components/Login/Logout';
import { useState } from 'react';
import { coursesContext } from '../context/context';
import UserContext from '../context/UserContext';


const TopLearn = (props) => {
    ///////////////////////////////
    // const [User, setUser] = useState("")
    // const AddUser = (user) => {
    //     setUser(user)
    // }
    // const ClearUser = () => {
    //     setUser("")
    // }
    // // ///////////////////////////////

    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     if (token) {
    //         const decodedToken = decodeToken(token);
    //         const dateNow = Date.now() / 1000;    ///// changed to second''
    //         if (decodedToken.payload.exp < dateNow) {
    //             localStorage.removeItem("token")
    //         }
    //         else {
    //             AddUser(decodedToken.payload.user)
    //         }
    //     }

    // }, [])
    // console.log(User)
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Courses} />
                <Route path="/Login" component={Login} />
                <Route path="/Logout" component={Logout} />
                <Route path="/Register" component={Register} />

                {/* <Route path="/Logout" render={() => (<UserContext>
                    <Logout />
                </UserContext>)} /> */}
{/* 
                <Route path="/register" render={() => (<UserContext>
                    <Register />
                </UserContext>)} /> */}
                <Route path="/courses" component={Archive} />
                <Route path="/course/:id" component={SingleCoursePage} />
                <Route path="*" exact component={MyNotFound} />
            </Switch>
        </Layout>

    );
}

export default TopLearn;
