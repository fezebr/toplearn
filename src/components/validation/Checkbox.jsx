import React from 'react'
import { Formik, Form, Field, useField } from 'formik'
import * as Yup from 'yup'



const Checkbox = ({ children, ...props }) => {

     const [field, meta] = useField({ ...props, type: 'checkbox' });
     return (

          <div className="accept-rules">
               <label>
                    <input type="checkbox" {...field} {...props} />
                    قوانین و مقررات سایت را میپذیرم
               </label>
               <div className="error-valisation" >

                    {meta.touched && meta.error ? (
                         <div >{meta.error}</div>
                    ) : null}
               </div>
          </div>
     );
};

export default Checkbox;