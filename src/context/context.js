import React from 'react'
export const CoursesContext = React.createContext({
     courses: "",
     setCourses: () => { },
     postPerPage: "",
     paginate: "",
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
export const adminContext = React.createContext({
     course:"",
     openNewCourseDialog: () => {} ,
     openDeleteCourseDialog: () => {},
     openEditeCourseDialog: () => {},
     setSearch: () => {},
     filteredCourses: () =>{}
});
