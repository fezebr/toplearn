import React, { Fragment, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CoursesContext } from './../../context/context';
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
                </div>
            
            </section>

         
        </Fragment>

    );
}

export default Courses;
