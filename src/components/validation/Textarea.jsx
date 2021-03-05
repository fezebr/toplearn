import React from 'react';
const Textarea = () => {
     const [field, meta] = useField({ ...props });

     return (

          <div className="accept-rules">
               <label>
                    <input type="textarea" {...field} {...props} />
                         قوانین و مقررات سایت را میپذیرم
                    </label>
               <div className="error-valisation" >

                    {meta.touched && meta.error ? (
                         <div >{meta.error}</div>
                    ) : null}
               </div>
          </div>
     );
}

export default Textarea;