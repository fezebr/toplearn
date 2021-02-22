import React, { Fragment, useState } from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik';
import { loginUser } from '../Services/userServise'
import { toast } from 'react-toastify';
import TextInput from './../validation/TextInput';
import Checkbox from './../validation/Checkbox';

const Login = ({ history }) => {
     const initialValues = {
          email: "",
          password: "",
          acceptedTerms: false,

     }

     const onSubmit = async (values, { resetForm }) => {
          console.log(values)
          try {
               const { status, data } = await loginUser(values)
               if (status === 200) {
                    toast.success("ورود با موفقیت انجام شد.",
                         {
                              position: "top-right",
                              closeOnClick: true
                         });
                    resetForm();
                    console.log(data)
                    localStorage.setItem("token", data.token);
                    history.replace("/")

               }
          } catch (ex) {
               console.log(ex)
               toast.error("مشکلی پیش آمده.", {
                    position: "top-right",
                    closeOnClick: true
               });
          }
     }
     const validationSchema = Yup.object({
          email: Yup.string().email('ایمیل خود را به درستی وارد کنید!').required('پر کردن این فیلد اجباریست!'),
          password: Yup.string().required('پر کردن این فیلد اجباریست!'),
          acceptedTerms: Yup.boolean().oneOf([true], 'شما باید قوانین را بپذیرید!'),
     })
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

                         <div className="form-layer">
                              <Formik
                                   initialValues={initialValues}
                                   validationSchema={validationSchema}
                                   onSubmit={onSubmit}

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
                                             <a href=""> <i className="zmdi zmdi-account"></i> عضویت در سایت </a>
                                        </div>

                                        <button className="btn btn-success"> ورود به سایت </button>

                                   </Form>
                              </Formik>
                         </div>

                    </div>
               </main >

          </Fragment >
     );
}

export default Login;