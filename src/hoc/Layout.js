import React  from 'react';
import Courses from '../containers/Courses/Courses';

import Users from '../containers/Users/Users';
import { Route, Switch, NavLink, Redirect} from 'react-router-dom';
import './Layout.css';

const layout = () => {
    
    return (
        <div className="Layout">
            <nav>
                <ul>
                    <li>
                        {/* <a href='/users'>Users</a> */}
                        <NavLink to='/users'>Users</NavLink>
                    </li>
                    <li>
                        {/* <a href='/courses'>Courses</a> */}
                        <NavLink to='/courses'>Courses</NavLink>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path='/users' component={Users} />
                <Route path='/courses' component={Courses} />
                <Redirect from='/all-courses' to='/courses' /> 
                <Route  render={() => <h1>404 error page</h1>} />
            </Switch>
        </div>
    );
}

export default layout;