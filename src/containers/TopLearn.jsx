
import { Route, Switch } from 'react-router-dom';
import Layout from './../components/Layout/Layout';
import Login from './../components/Login/Login';
import Courses from './../components/courses/Courses';
import Archive from './../components/courses/Archive';
import SingleCoursePage from './../components/courses/SingleCoursePage';
import Register from './../components/Login/Register';


const TopLearn = (props) => {

    return (
   
            <Layout>
                <Switch>
                    <Route path="/" exact component={Courses} />
                    <Route path="/Login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/courses" component={Archive} />
                    <Route path="/course/:id" component={SingleCoursePage} />
                    
                </Switch>
            </Layout>
    
    );
}

export default TopLearn;
