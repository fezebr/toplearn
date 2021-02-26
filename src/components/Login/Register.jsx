import React, { useContext } from "react";
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import Helmet from 'react-helmet'
import TextInput from './../validation/TextInput';
import Checkbox from './../validation/Checkbox';
import { NavLink } from 'react-router-dom';
import { userContext } from "../../context/context";

const Register = () => {
     const registerContext = useContext(userContext)
     const { RegisterOnSubmit } = registerContext


     const initialValues = {
          fullname: "",
          email: "",
          password: "",
          acceptedTerms: false,

     }



     const validationSchema = Yup.object({
          email: Yup.string().email('ایمیل خود را به درستی وارد کنید!').required('پر کردن این فیلد اجباریست!'),
          password: Yup.string().required('پر کردن این فیلد اجباریست!'),
          fullname: Yup.string().required('پر کردن این فیلد اجباریست!'),
          acceptedTerms: Yup.boolean().oneOf([true], 'شما باید قوانین را بپذیرید!'),

     })

     return (
          <main className="client-page">
               <div className="container-content">
                    <header>
                         <h2 > عضویت در سایت </h2>
                    </header>
                    <Helmet>
                         <title>تاپلرن / عضویت در سایت</title>
                    </Helmet>

                    <div className="form-layer">
                         <Formik
                              initialValues={initialValues}
                              validationSchema={validationSchema}
                              onSubmit={RegisterOnSubmit}
                         >

                              <Form >

                                   <TextInput
                                        name="fullname"
                                        id="fullname"
                                        type="text"
                                        className="form-control"
                                        placeholder="نام و نام خانوادگی"
                                        classIcon="zmdi zmdi-account"
                                   />

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
                                        <a href=""> <i className="zmdi zmdi-assignment"></i> قوانین و مقررات سایت !</a>
                                        <NavLink to="Login"> <i className="zmdi zmdi-account"></i> ورود به سایت </NavLink>
                                   </div>

                                   <button type="submit" className="btn btn-success none-outline"> عضویت در سایت </button>

                              </Form>
                         </Formik>
                    </div>

               </div>
          </main>


     );
}

export default Register;