import React from 'react'
export const CoursesContext = React.createContext({
     courses: "",
     postPerPage: "",
     paginate: "",
     // setCourses: () => { },
     loading: "",
     currentPost: ""
     // setLoading: () => { },
});



export const userContext = React.createContext({
     User:"",
     setUser: () => {},
     RegisterOnSubmit:() =>{},
     loginOnSubmit:() =>{},

});
