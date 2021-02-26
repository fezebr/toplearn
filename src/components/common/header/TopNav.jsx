import React from 'react'
import { NavLink } from 'react-router-dom'
const TopNav = () => {
     return (
          <nav>
               <div className="row">
                    <div className="col-sm-6 col-xs-12">
                         <ul>
                              <li>
                                   <a href=""> همکاری در فروش </a>
                                   <a href=""> درباره ما </a>
                                   <a href=""> تماس با ما </a>
                              </li>
                         </ul>
                    </div>
                    <div className="col-sm-6 col-xs-12">
                         <div className="clientarea">
                              <div className="loggein ">
                                   <i className="zmdi zmdi-account"></i>
                                   <NavLink to="Login"> ورود </NavLink>
                                   <NavLink to="register">/ عضویت  </NavLink>

                                   {/* <i className="zmdi zmdi-account"></i><a href=""> ایمان مدائنی ، خوش آمدی </a> */}
                              </div>
                              <div className="signin hidden">
                                   <i className="zmdi zmdi-account"></i>
                                   <a href=""> ورود </a>
                                   <a href="" > عضویت </a>
                              </div>
                         </div>
                    </div>
               </div>
          </nav >
     );
}




// <div className="clientarea">
//      {User.fullname ? (
//           <div className="signin hidden">
//                <i className="zmdi zmdi-account"></i>
//                <a href=""> {User.fullname} </a>

//                <NavLink to="logout">/ خروج  </NavLink>

//           </div>
//      ) : (
//                <div className="loggein ">
//                     <i className="zmdi zmdi-account"></i>
//                     <NavLink to="Login"> ورود </NavLink>
//                     <NavLink to="register">/ عضویت  </NavLink>

            
//                </div>)
//      }


// </div>


export default TopNav;