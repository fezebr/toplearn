import React from 'react'
import config from '../Services/config.json'
const Course = ({ title, price, image }) => {
     return (
          <div>

               <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 term-col">
                    <article>
                         <a href="" className="img-layer"><img src={`${config.toplearnapi}/${image}`} /></a>
                         <h2><a href=""> {title} </a></h2>
                         <span> {price} </span>
                         <i>1:52:32</i>
                    </article>
               </div>
             
          </div>
     );
}

export default Course;