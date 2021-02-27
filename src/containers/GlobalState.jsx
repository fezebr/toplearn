import React,{useState,useEffect} from 'react';
import axios from 'axios'
import { CoursesContext } from './../context/context';


const GlobalState = ({ children }) => {
     const [courses, setCourses] = useState([])
     const [loading, setLoading] = useState(false)

     useEffect(() => {
          const fetchCourse = async () => {
               setLoading(true)
               const { data } = await axios.get('https://toplearnapi.ghorbany.dev/api/courses');
               setCourses(data.courses);
               setLoading(false)
          }
          fetchCourse();
     }, [])

     const [postPerPage, setPostPerPage] = useState(3) //////per page 7 (10 paginat)
     const [currentPage, setCurrentPage] = useState(1)

     const indexOfLastPost = currentPage * postPerPage
     const indexOfFirstPost = indexOfLastPost - postPerPage
     const currentPost = courses.slice(indexOfFirstPost, indexOfLastPost)

     const paginate = pageNumber => setCurrentPage(pageNumber);

     return (
          <CoursesContext.Provider
               value={{ courses, loading, postPerPage, paginate, currentPost }}
          >
               {children}
          </CoursesContext.Provider >
     );
}

export default GlobalState;