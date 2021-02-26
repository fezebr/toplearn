import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Footer from './../common/Footer';
import TopNav from './../common/header/TopNav';
import MainNav from '../common/header/MainNav';
import Header from './../common/header/Header';
import { Helmet } from 'react-helmet';


const Layout = (props) => {
      const { pathname } = props.location
      return (
            <Fragment>
                  <Helmet>
                        <title> خودآموز تاپلرن</title>
                  </Helmet>
                  <div className="landing-layer">
                        <div className="container">
                              {/* <UserContext> */}
                                    <TopNav />
                              {/* </UserContext> */}
                              {pathname === "/" ? <Header /> : null}

                        </div>
                  </div>
                  <MainNav />
                  <main id="home-page">
                        <div className="container">
                              {props.children}
                        </div>
                  </main>


                  <Footer />
            </Fragment>
      );
}

export default withRouter(Layout);