import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Home from '../Home/Home';
import Footer from './../common/Footer';
import TopNav from './../common/header/TopNav';
import MainNav from '../common/header/MainNav';
import Header from './../common/header/Header';


const Layout = (props) => {
      const { pathname } = props.location
      return (
            <Fragment>

                  <div className="landing-layer">
                        <div className="container">
                              <TopNav />
                              {pathname === "/" ? <Header /> : null}

                        </div>
                  </div>
                  <MainNav />
                  {/* <Home /> */}
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