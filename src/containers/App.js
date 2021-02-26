import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom';
import TopLearn from './TopLearn';
import { ToastContainer } from 'react-toastify';
import { CoursesContext } from './../context/context';
import UerContext from './../context/UserContext';

function App() {
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

    console.log(courses)
    return (
        <BrowserRouter>
            <CoursesContext.Provider
                value={{ courses, loading, postPerPage, paginate,currentPost  }}
            >
                <UerContext />

                <ToastContainer />
            </CoursesContext.Provider>
        </BrowserRouter>
    );
}

export default App;
