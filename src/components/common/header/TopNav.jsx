import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { userContext } from '../../../context/context';

const TopNav = () => {
     const context = useContext(userContext)
     const { User } = context
     console.log(User)

     return (

          <nav>
               <div className="row">
                    <div className="col-sm-6 col-xs-12">
                         <ul>
                              <li>
                                   <NavLink
                                        to="/"
                                        exact
                                        activeStyle={{ color: "lime" }}
                                   >
                                        {" "}
                              صفحه اصلی{" "}
                                   </NavLink>
                                   <a href=""> درباره ما </a>
                                   <a href=""> تماس با ما </a>
                              </li>
                         </ul>
                    </div>
                    <div className="col-sm-6 col-xs-12">
                         <div className="clientarea">
                              {User ? (
                                   <div className="loggein ">
                                        <i className="zmdi zmdi-account"></i>
                                        <NavLink to="/Profile">
                                             {User.fullname}
                                        </NavLink>{" "}
                                        {User.isAdmin ? (
                                             <NavLink to="/dashboard">/داشبورد</NavLink>
                                        ) : (null)}

                              / <NavLink to="/Logout">خروج</NavLink>
                                   </div>
                              ) : (
                                        <div className="signin ">
                                             <i className="zmdi zmdi-account"></i>
                                             <NavLink
                                                  to="/login"
                                                  activeStyle={{ color: "lime" }}
                                             >
                                                  {" "}
                                  ورود{" "}
                                             </NavLink>{" "}
                              /
                                             <NavLink
                                                  to="/register"
                                                  activeStyle={{ color: "lime" }}
                                             >
                                                  {" "}
                                  عضویت{" "}
                                             </NavLink>
                                        </div>
                                   )}
                         </div>
                    </div>
               </div>
          </nav>


     );
}


{/* <i className="zmdi zmdi-account"></i><a href=""> ایمان مدائنی ، خوش آمدی </a> */ }




export default TopNav;