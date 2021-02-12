import React, { useContext, useState, useEffect } from 'react'
import CoursesContext from './../context/CoursesContext';
import axios from 'axios'
import TopLearn from './TopLearn';


const CoursesContextProvider = (props) => {


     const [courses, setCourses] = useState([])

     useEffect(() => {
          const fetchCourse = async () => {
               const res = await axios.get('https://toplearnapi.ghorbany.dev/api/courses');
               setCourses(res.data.courses);


          }
          fetchCourse();
     }, [])
     console.log(courses)
     return (
          <CoursesContext.Provider
               value={{
                    courses,

               }}
          >

               <div>
                    <TopLearn />
               </div>
          </CoursesContext.Provider>
     );
}

export default CoursesContextProvider;