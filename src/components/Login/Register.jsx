import React, { useState } from "react";
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import { toast, ToastContainer } from "react-toastify";
import { registerUser } from './../Services/userServise';
import TextInput from './../validation/TextInput';
import Checkbox from './../validation/Checkbox';


const Register = () => {
     const initialValues = {
          name: "",
          email: "",
          password: "",
          acceptedTerms: false,

     }


     const onSubmit = async (values, { resetForm }) => {
          console.log(values)


          try {
               const { status } = await registerUser(values);
               if (status === 201) {
                    toast.success("کاربر با موفقیت ساخته شد.", {
                         position: "top-right",
                         closeOnClick: true
                    });
                    resetForm();
               }
          } catch (ex) {
               toast.error("مشکلی پیش آمده.", {
                    position: "top-right",
                    closeOnClick: true
               });
               console.log(ex);
          }
     };

     const validationSchema = Yup.object({
          email: Yup.string().email('ایمیل خود را به درستی وارد کنید!').required('پر کردن این فیلد اجباریست!'),
          password: Yup.string().required('پر کردن این فیلد اجباریست!'),
          name: Yup.string().required('پر کردن این فیلد اجباریست!'),
          acceptedTerms: Yup.boolean().oneOf([true], 'شما باید قوانین را بپذیرید!'),

     })

     return (
          <main className="client-page">
               <div className="container-content">
                    <header>
                         <h2 > عضویت در سایت </h2>

                    </header>

                    <div className="form-layer">
                         <Formik
                              initialValues={initialValues}
                              validationSchema={validationSchema}
                              onSubmit={onSubmit}
                         >

                              <Form onSubmit={onSubmit}>

                                   <TextInput
                                        name="name"
                                        id="name"
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
                                        <a href=""> <i classNamezmdi zmdi-account"></i> ورود به سایت </a>
                                   </div>

                                   <button className="btn btn-success"> عضویت در سایت </button>

                              </Form>
                         </Formik>
                    </div>

               </div>
          </main>


     );
}

export default Register;