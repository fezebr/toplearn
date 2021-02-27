import React, {useEffect, useContext } from 'react'
// import { browserHistory } from 'react-router';
import { userContext } from './../../context/context';
// import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


const Logout = ({history}) => {
     const logoutContext = useContext(userContext)
     const { setUser } = logoutContext

     useEffect(() => {
          localStorage.removeItem("token")
          history.push("/");
          setUser("")
     }, [])
    
  
     return null;
}

export default withRouter(Logout);