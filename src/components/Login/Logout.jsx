import React, { Component, useEffect,useContext } from 'react'
import UserContext from './../../context/UserContext';
const Logout = ({ history, addUser }) => {
     const context = useContext(UserContext)

     useEffect(() => {
          console.log(addUser)
     }, [])

     return null;
}

export default Logout;