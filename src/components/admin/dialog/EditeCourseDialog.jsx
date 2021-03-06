import React, { useState, useEffect } from "react";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import { updateCourse } from './../../Services/coursesService';
import { CoursesContext } from './../../../context/context';
import { successMessage } from './../../utils/Message';

const EditeCourseDialog = ({ showDialog, closeDialog, course }) => {
     const [courseId, setCourseId] = useState();
     const [title, setTitle] = useState();
     const [price, setPrice] = useState();
     const [imageUrl, setImageUrl] = useState();
     const [info, setInfo] = useState();

     useEffect(() => {
          setCourseId(course._id);
          setTitle(course.title);
          setPrice(course.price);
          setImageUrl(course.imageUrl);
          setInfo(course.info);

          return () => {
               setCourseId();
               setTitle();
               setPrice();
               setImageUrl();
               setInfo();
          };
     }, [course]);

     console.log(course)


     const handleSubmit = async (event) => {
          event.preventDefault();
          console.log(courseId)
          let MyData = new FormData();
          MyData.append("title", title);
          MyData.append("price", price);
          if (event.target.imageUrl.files[0])
               MyData.append("imageUrl", event.target.imageUrl.files[0]);
          else MyData.append("imageUrl", imageUrl);
          MyData.append("info", info);
          console.log(MyData);
          for (var pair of MyData.entries()) {
               console.log(pair[0] + ',' + pair[1])
          }
          try {
               const { status } = await updateCourse(courseId, MyData);

               if (status === 200) successMessage("دوره با موفقیت تعییر یافت.");
               closeDialog();

          } catch (ex) {
               console.log(ex)
          }
     }

     return (
          <DialogOverlay
               isOpen={showDialog}
               onDismiss={closeDialog}
               style={{ background: "hsla(0, 100%, 100%, 0.9)" }}
          >
               <DialogContent

                    style={{
                         border: "solid 5px hsla(0, 0%, 0%, 0.5)",
                         borderRadius: "10px",
                         boxShadow: "0px 10px 50px hsla(0, 0%, 0%, 0.33)",
                    }}
               >
          
                    <div className="inner form-layer">
                         <form onSubmit={handleSubmit}>
                              <input
                                   name="title"
                                   style={{ marginBottom: 3 }}
                                   className="form-control"
                                   placeholder="عنوان دوره"
                                   aria-describedby="title"
                                   value={title}
                                   onChange={e => setTitle(e.target.value)}
                              />
                              <input
                                   name="price"
                                   style={{ marginBottom: 3 }}
                                   className="form-control"
                                   placeholder="قیمت دوره به تومان"
                                   aria-describedby="price"
                                   value={price}
                                   onChange={e => setPrice(e.target.value)}
                              />


                              <input
                                   type="file"
                                   name="imageUrl"
                                   style={{ marginBottom: 3 }}
                                   className="form-control mb-2"
                                   aria-describedby="imageUrl"
                              />
                              <textarea
                                   name="info"
                                   placeholder="توضیحات دوره"
                                   className="form-control"
                                   style={{ marginBottom: 3 }}
                                   value={info}
                                   onChange={(e) => setInfo(e.target.value)}
                              />

                              <button
                                   type="submit"
                                   className="btn btn-success "
                                   style={{ margin: "1em" }}
                              >
                                   ثبت دوره
                                    </button>
                              <button
                                   className="btn btn-warning mr-5"
                                   style={{ margin: "1em" }}
                                   onClick={closeDialog}
                              >
                                   انصراف
                                   </button>
                         </form>

                    </div>
               </DialogContent>
          </DialogOverlay>
     );
};

export default EditeCourseDialog;
