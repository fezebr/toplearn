import React, { useContext, useState, useEffect } from 'react'
import CoursesContext from './../context/CoursesContext';
import axios from 'axios'
import TopLearn from './TopLearn';


const CoursesContextProvider = (props) => {


     const [courses, setCourses] = useState([])
     const [loading, setLoading] = useState(false)

     useEffect(() => {
          const fetchCourse = async () => {
               console.log(loading)

               setLoading(true)
               console.log(loading)
               const {data} = await axios.get('https://toplearnapi.ghorbany.dev/api/courses');
               // if(stat)
               setCourses(data.courses);
               setLoading(false)
               console.log(loading)

          }
          fetchCourse();
     }, [])
     console.log(courses)
//////////////////////////paginat
     
     const [postPerPage, setPostPerPage] = useState(3) //////per page 7 (10 paginat)
     const [currentPage, setCurrentPage] = useState(1)

     const indexOfLastPost = currentPage * postPerPage
     const indexOfFirstPost = indexOfLastPost - postPerPage
     const currentPost = courses.slice(indexOfFirstPost, indexOfLastPost)
     
     const paginate = pageNumber => setCurrentPage(pageNumber );



     
     return (
          <CoursesContext.Provider
               value={{
                    courses,
                    loading,
                    paginate,
                    postPerPage,
                    currentPost,
                    

               }}
          >

               <div>
                    <TopLearn />
               </div>
          </CoursesContext.Provider>
     );
}

export default CoursesContextProvider;