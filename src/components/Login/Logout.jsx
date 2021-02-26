import React, {useEffect, useContext } from 'react'
// import { browserHistory } from 'react-router';
import { userContext } from './../../context/context';
// import { Redirect } from 'react-router-dom';

const Logout = ({...props}) => {
     const logoutContext = useContext(userContext)
     const { setUser,historyPush } = logoutContext

     useEffect(() => {
          localStorage.removeItem("token")
          // setUser("")
          // browserHistory.push('/');
          // props.history.push("/");
          historyPush()
          // console.log(history)
          // props.removeItemhistory.replace("/")

     }, [])
    
  
     return null;
}

export default Logout;