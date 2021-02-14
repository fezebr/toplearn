import React, { Fragment, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import CoursesContextProvider from './../../containers/CoursesContextProvider';
import CoursesContext from './../../context/CoursesContext';
import Course from './Course';

const Courses = () => {

    const context = useContext(CoursesContext)
    const { courses } = context

    return (

        <Fragment>


            <section className="terms-items">
                <header>
                    <h2> آخرین دوره های تاپ لرن </h2>
                    <NavLink to="courses"> مشاهده همه دوره ها </NavLink>
                </header>
                <div className="row">

                    {courses.map(i => (
                        <div>

                            <Course
                             
                                _id={i._id}
                                key={i._id}
                                title={i.title}
                                price={i.price}
                                image={i.imageUrl}
                            />
                            
                        </div>
                    ))}

                    {/* <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                        <article>
                            <a href="" className="img-layer"><img src="images/pic/1.jpg" /></a>
                            <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                            <span> رایگان </span>
                            <i>1:52:32</i>
                        </article>
                    </div> */}

                    {/* 
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                        <article>
                            <a href="" className="img-layer"><img src="images/pic/2.jpg" /></a>
                            <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                            <span> رایگان </span>
                            <i>1:52:32</i>
                        </article>
                    </div>


                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                        <article>
                            <a href="" className="img-layer"><img src="images/pic/3.jpg" /></a>
                            <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                            <span> 150.000 تومان </span>
                            <i>1:52:32</i>
                        </article>
                    </div>


                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                        <article>
                            <a href="" className="img-layer"><img src="images/pic/4.jpg" /></a>
                            <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                            <span> رایگان </span>
                            <i>1:52:32</i>
                        </article>
                    </div>


                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                        <article>
                            <a href="" className="img-layer"><img src="images/pic/5.jpg" /></a>
                            <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                            <span> 15.000 تومان </span>
                            <i>1:52:32</i>
                        </article>
                    </div>


                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                        <article>
                            <a href="" className="img-layer"><img src="images/pic/6.jpg" /></a>
                            <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                            <span> رایگان </span>
                            <i>1:52:32</i>
                        </article>
                    </div>


                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                        <article>
                            <a href="" className="img-layer"><img src="images/pic/7.jpg" /></a>
                            <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                            <span> 20.000 تومان </span>
                            <i>1:52:32</i>
                        </article>
                    </div>


                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                        <article>
                            <a href="" className="img-layer"><img src="images/pic/8.jpg" /></a>
                            <h2><a href=""> آموزش متریال دیاین در زامارین </a></h2>
                            <span> 75.000 تومان </span>
                            <i>1:52:32</i>
                        </article>
                    </div> */}

                </div>
            </section>


        </Fragment>

    );
}

export default Courses;

// function Child() {
//     // We can use the `useParams` hook here to access
//     // the dynamic pieces of the URL.
//     let { id } = useParams();
  
//     return (
//       <div>
//         <h3>ID: {id}</h3>
//       </div>
//     );
//   }