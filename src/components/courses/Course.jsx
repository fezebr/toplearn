import React from 'react'
import config from '../Services/config.json'
import { Link, useHistory } from 'react-router-dom';
const Course = ({ title, price, image, _id }) => {
   
     let history = useHistory();
     const handleClick = () => {
          history.push(`/course/${_id}`);
     }
     console.log(_id)
     return (
          <div>

               <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 term-col">
                    <article>
                         <Link to={`/course/${_id}`} className="img-layer"><img src={`${config.toplearnapi}/${image}`} /></Link>
                         <h2><a onClick={handleClick}> {title} </a></h2>
                         <span> {price} </span>
                         <i>1:52:32</i>
                    </article>
               </div>

          </div>
     );
}

export default Course;