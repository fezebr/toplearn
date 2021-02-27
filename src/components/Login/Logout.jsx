import {useEffect, useContext } from 'react'
import { userContext } from './../../context/context';
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