import React, { useState,useEffect } from 'react';
import { userContext } from './context';
import { errorMessage, successMessage } from './../components/utils/Message';
import { withRouter } from 'react-router-dom';
import { decodeToken } from './../components/utils/decodeToken';
import { loginUser, registerUser } from './../components/Services/userServise';
import TopLearn from './../containers/TopLearn';


const UerContext = ({ children, history }) => {

     const [User, setUser] = useState("")

     /////////////////////// register and login form submiit ////////////////
     const RegisterOnSubmit = async (values, { resetForm }) => {
          try {
               const { status } = await registerUser(values);
               if (status === 201) {
                    successMessage("ورود با موفقیت انجام شد.")
                    resetForm();
               }
          } catch (ex) {
               errorMessage("مشکلی پیش آمده.")
               console.log(ex);
          }
     };

     const loginOnSubmit = async (values, { resetForm }) => {
          try {
               const { status, data } = await loginUser(values)
               if (status === 200) {
                    successMessage("ورود با موفقیت انجام شد.")
                    localStorage.setItem("token", data.token);
                    const userOfToken = (decodeToken(data.token).payload.user)
                    setUser(userOfToken)
                    console.log(history)
                    history.replace("/")
                  
                    resetForm();

               }
          } catch (ex) {
               console.log(ex)
               errorMessage("مشکلی پیش آمده.")
          }
     }
     console.log(User)
   
     useEffect(() => {
          const token = localStorage.getItem("token");
          if (token) {
               const decodedToken = decodeToken(token);
               const dateNow = Date.now() / 1000;    ///// changed to second''
               if (decodedToken.payload.exp < dateNow) {
                    localStorage.removeItem("token")
                    setUser({})
               }
               else {
                    setUser(decodedToken.payload.user)
               }
          }

     }, [])
     console.log(User)

     return (
          <userContext.Provider
               value={{
                    User,
                    setUser,
                    RegisterOnSubmit,
                    loginOnSubmit
               }}
          >
            <TopLearn/>
          </userContext.Provider>
     );
}

export default withRouter(UerContext);