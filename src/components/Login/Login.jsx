import React, { Fragment, useContext, useState } from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import TextInput from './../validation/TextInput';
import Checkbox from './../validation/Checkbox';
import { NavLink, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { userContext } from './../../context/context';
import { infoMessage } from './../utils/Message';

const Login = ({ history }) => {
     const loginContext = useContext(userContext)
     const { loginOnSubmit, User } = loginContext

     if (User) {
          return <Redirect to="/" />
     }
     const validationSchema = Yup.object({
          email: Yup.string().email('ایمیل خود را به درستی وارد کنید!').required('پر کردن این فیلد اجباریست!'),
          password: Yup.string().required('پر کردن این فیلد اجباریست!'),
          acceptedTerms: Yup.boolean().oneOf([true], 'شما باید قوانین را بپذیرید!'),
     })

     const initialValues = {
          email: "",
          password: "",
          acceptedTerms: false,

     }
     return (

          <Fragment>
               <div className="container">
                    <nav aria-label="breadcrumb">
                         <ul className="breadcrumb">
                              <li className="breadcrumb-item"><a href="#">تاپ لرن</a></li>
                              <li className="breadcrumb-item active" aria-current="page">ورود به سایت</li>
                         </ul>
                    </nav>
               </div>

               <main className="client-page">
                    <div className="container-content">

                         <header><h2> ورود به سایت </h2></header>
                         <Helmet>
                              <title>تاپلرن / ورود به سایت</title>
                         </Helmet>

                         <div className="form-layer">
                              <Formik
                                   initialValues={initialValues}
                                   validationSchema={validationSchema}
                                   onSubmit={loginOnSubmit}
                              >

                                   < Form >

                                        <TextInput
                                             name="email"
                                             id="email"
                                             type="text"
                                             className="form-control"
                                             placeholder="ایمیل"
                                             classIcon="zmdi zmdi-email"
                                        />


                                        <TextInput
                                             name="password"
                                             id="password"
                                             type="password"
                                             className="form-control"
                                             placeholder="رمز عبور "
                                             classIcon="zmdi zmdi-lock"
                                        />


                                        <Checkbox
                                             name="acceptedTerms"
                                        />

                                        <div className="link">
                                             <a href=""> <i className="zmdi zmdi-lock"></i> رمز عبور خود را فراموش کرده ام !</a>
                                             <NavLink to="register"> <i className="zmdi zmdi-account"></i> عضویت در سایت </NavLink>
                                        </div>

                                        <button type="submit" className="btn btn-success none-outline"> ورود به سایت </button>

                                   </Form>
                              </Formik>
                         </div>

                    </div>
               </main >

          </Fragment>
     );
}

export default Login;