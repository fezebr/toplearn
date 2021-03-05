
import React, { Fragment } from 'react'
import { useField } from 'formik'


const TextInputFile = ({classIcon, ...props }) => {
     const [field, meta] = useField(props);


     return ( 
          <Fragment>

          <div className="input-group">
               <span className="input-group-addon" id="password"><i className={classIcon}></i></span>
               <input  {...field} {...props} 
               // onChange={(event) => {
               //      form.setFieldValue("file", event.currentTarget.files[0]);
               // }}
               />
          </div>
          <div className="error-valisation">

               {meta.touched && meta.error ? (
                    <p >{meta.error}</p>

               ) : null}
          </div>
     </Fragment>
      );
}
 
export default TextInputFile;