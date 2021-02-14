import React, { useState,Fragment,useContext } from 'react';
import CoursesContext from './../../context/CoursesContext';

const Pagination = () => {
     const context = useContext(CoursesContext)
     const { courses, postPerPage, paginate } = context
     const pageNumber = []
     for (let i = 1 ; i <= Math.ceil(courses.length / postPerPage); i++) {
          pageNumber.push(i)
     }///////1-2-3
     console.log(courses)
     console.log(postPerPage)
     console.log(pageNumber)

     return (

          <nav aria-label="Page navigation">
               <ul className="pagination justify-content-center">
                    <li className="page-item">
                         <a className="page-link" href="#" aria-label="Previous">
                              <span aria-hidden="true"><i className="zmdi zmdi-chevron-right"></i></span>
                         </a>
                    </li>
                    {pageNumber.map(number => (
                
                              <li className="page-item"><a onClick={() => paginate(number)} className="page-link" href="#">{number}</a></li>
                           
                    ))}


                    <li className="page-item">
                              <a className="page-link"  aria-label="Next">
                                   <span aria-hidden="true"><i className="zmdi zmdi-chevron-left"></i></span>
                              </a>
                         </li>
               </ul>
          </nav>
     );
}

export default Pagination;