import React, { useState, useContext } from 'react';
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog"
import http from './../../Services/httpService'
import axios from 'axios'
import * as Yup from 'yup'
import { CoursesContext } from './../../../context/context';
import { newCourse } from './../../Services/coursesService';
import { successMessage, errorMessage } from './../../utils/Message';


const NewCourseDialog = ({ showDialog, closeDialog }) => {
     const context = useContext(CoursesContext)
     const { courses, setCourses } = context

     const [title, setTitle] = useState();
     const [price, setPrice] = useState();
     const [info, setInfo] = useState();

     const handleSubmit = async (event) => {
          event.preventDefault();
          try {
               let myData = new FormData()
               myData.append("title", title)
               myData.append("price", Number.parseInt(price))
               myData.append("imageUrl", event.target.imageUrl.files[0]);
               myData.append("info", info)

               const { status, data } = await http.post(
                    "https://toplearnapi.ghorbany.dev/api/course", myData
               );
               const dupCourse = [...courses]
               dupCourse.push(data.course)
               setCourses(dupCourse)
               if (status === 201) {
                    successMessage("دوره با موفقیت ساخته شد")
               }
               closeDialog();
          } catch (ex) {
               console.log(ex)
               errorMessage("مشکلی پیش آمده.")
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
}

export default NewCourseDialog;