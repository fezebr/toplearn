// import React, { useContext, useState, useEffect } from 'react'
// import { CoursesContext } from './../context/context';
// import axios from 'axios'
// import TopLearn from './TopLearn';
// import { decodeToken } from './../components/utils/decodeToken';


// const CoursesContextProvider = ({ children, history }) => {


//      // const [courses, setCourses] = useState([])
//      // const [loading, setLoading] = useState(false)

//      // useEffect(() => {
//      //      const fetchCourse = async () => {
//      //           console.log(loading)

//      //           setLoading(true)
//      //           console.log(loading)
//      //           const { data } = await axios.get('https://toplearnapi.ghorbany.dev/api/courses');
//      //           // if(stat)
//      //           setCourses(data.courses);
//      //           setLoading(false)
//      //           console.log(loading)

//      //      }
//      //      fetchCourse();
//      // }, [])

//      ////////////////////////////////////////////////////////////////////////
//      const [User, setUser] = useState("")
//      const AddUser = (user) => {
//           setUser(user)
//      }
//      const ClearUser = () => {
//           setUser("")
//      }
//      ///////////////////////////////

//      useEffect(() => {
//           const token = localStorage.getItem("token");
//           if (token) {
//                const decodedToken = decodeToken(token);
//                const dateNow = Date.now() / 1000;    ///// changed to second''
//                if (decodedToken.payload.exp < dateNow) {
//                     localStorage.removeItem("token")
//                }
//                else {
//                     AddUser(decodedToken.payload.user)
//                }
//           }

//      }, [])
//      //////////////////////////paginat

//      const [postPerPage, setPostPerPage] = useState(3) //////per page 7 (10 paginat)
//      const [currentPage, setCurrentPage] = useState(1)

//      const indexOfLastPost = currentPage * postPerPage
//      const indexOfFirstPost = indexOfLastPost - postPerPage
//      const currentPost = courses.slice(indexOfFirstPost, indexOfLastPost)

//      const paginate = pageNumber => setCurrentPage(pageNumber);




//      return (
//           <CoursesContext.Provider
//                value={{
//                     courses,
//                     loading,
//                     paginate,
//                     postPerPage,
//                     currentPost,
//                     User,
//                     setUser


//                }}
//           >

//                <div>
//                     <TopLearn />
//                </div>
//           </CoursesContext.Provider>
//      );
// }

// export default CoursesContextProvider;