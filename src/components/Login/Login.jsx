import React, { Fragment, useState } from 'react'
import {whithRouter} from 'react-router-dom'
import { loginUser } from '../Services/userServise'
import { toast } from 'react-toastify';

const Login = ({history}) => {
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")
const reset = () =>{
     setEmail("")
     setPassword("")
}

     const handleSubmit = async event => {
          event.preventDefault()
          const user = {
               email,
               password
          }
          try {
               const { status, data } = await loginUser(user)
               if (status === 200) {
                    toast.success("ورود با موفقیت انجام شد.",
                     {
                        position: "top-right",
                        closeOnClick: true
                    });
                    console.log(data)
                    localStorage.setItem("token",data.token);
                    history.replace("/")
                    reset();
                }
          } catch (ex) {
                    console.log(ex)
                    toast.error("مشکلی پیش آمده.", {
                         position: "top-right",
                         closeOnClick: true
                     });
               }

          }
     console.log(email)
          console.log(password)
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

                                   <form onSubmit={handleSubmit}>

                                        <div className="input-group">
                                             <span className="input-group-addon" id="email-address"><i className="zmdi zmdi-email"></i></span>
                                             <input
                                                  type="text"
                                                  className="form-control"
                                                  placeholder="ایمیل"
                                                  aria-describedby="email-address"
                                                  onChange={e => setEmail(e.target.value)}
                                                  value={email}
                                             />
                                        </div>

                                        <div className="input-group">
                                             <span className="input-group-addon" id="password"><i className="zmdi zmdi-lock"></i></span>
                                             <input
                                                  type="password"
                                                  className="form-control"
                                                  placeholder="رمز عبور "
                                                  aria-describedby="password"
                                                  onChange={e => setPassword(e.target.value)}
                                                  value={password}
                                             />
                                        </div>

                                        <div className="remember-me">
                                             <label><input type="checkbox" name="" />  مرا بخاطر بسپار </label>
                                        </div>

                                        <div className="link">
                                             <a href=""> <i className="zmdi zmdi-lock"></i> رمز عبور خود را فراموش کرده ام !</a>
                                             <a href=""> <i className="zmdi zmdi-account"></i> عضویت در سایت </a>
                                        </div>

                                        <button className="btn btn-success"> ورود به سایت </button>

                                   </form>
                              </div>

                         </div>
                    </main>

               </Fragment>
          );
     }

     export default Login;