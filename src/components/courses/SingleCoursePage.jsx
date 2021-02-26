import React, { Fragment, useContext, useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import {CoursesContext} from './../../context/context';
import config from '../Services/config.json'
import { Helmet } from 'react-helmet';
import { courseIdValidator } from './../validation/IdValidators';
const SingleCoursePage = ({match}) => {

     const context = useContext(CoursesContext)
     const { courses, loading, currentPost } = context
     let { id } = useParams();
     console.log(id)
     if (!courseIdValidator(match.params.id)) return <Redirect to="/404" />

     // const [preloader, setPreloader] = useState(true)
     let singleCourse = null
     // console.log(loading)
     console.log(currentPost.length)

     if (currentPost.length == 0) {
          singleCourse = null
     } else {
          singleCourse = currentPost.find(i => i._id == id)
     }
     // console.log(id)/////// id of  course
     // console.log(courses)//////// 7 course in array
     // if (courses.length != 0) {

     //       singleCourse = courses.find(i => i._id == id)
     console.log(singleCourse)
     //      setPreloader(false)
     // }
     // if (!courseIdValidator(match.params.id)) return <Redirect to="/MyNotFound"
     if (currentPost.length == 0) {
          return <h2>LOADING...</h2>
     } else {
          return (

               <Fragment>
                    <div className="container">
                         <nav aria-label="breadcrumb">
                              <ul className="breadcrumb">
                                   <li className="breadcrumb-item"><a href="#"> تاپ لرن </a></li>
                                   <li className="breadcrumb-item active"><a href="#"> دوره ها </a></li>
                                   <li className="breadcrumb-item active" aria-current="page"> دوره آموزشی ساخت ربات تلگرام </li>
                              </ul>
                         </nav>
                    </div>
                    <div className="container">
                         <section className="term-content">
                              <header><h1> {singleCourse.title}</h1></header>
                              <Helmet>
                                   <title>{singleCourse.title}</title>
                              </Helmet>
                              <div className="row">

                                   <div className="col-md-8 col-sm-12 col-xs-12 pull-left">
                                        <section className="term-description">
                                             <img src={`${config.toplearnapi}/${singleCourse.imageUrl}`} />

                                             <h2> {`درباره ${singleCourse.title}`}</h2>
                                                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                             <p> {singleCourse.info} </p>

                                             <h2> سرفصل های این دوره : </h2>
                                             <ul>
                                                  <li> <h3> معرفی این دوره </h3> <i> رایگان </i> <span>00:15:12</span></li>
                                                  <li> <h3> چرا شی گرایی یاد بگیریم ؟ </h3> <i> نقدی </i>  <span>01:15:12</span></li>
                                                  <li> <h3> پروژه ایجاد یک وب سایت - طراحی دیتابیس </h3> <i> نقدی </i>  <span>02:05:12</span></li>
                                                  <li> <h3> پروژه ایجاد یک وب سایت - ایجاد پنل مدیریت </h3> <i> نقدی </i>  <span>00:10:12</span></li>
                                                  <li> <h3> چرا شی گرایی یاد بگیریم ؟ </h3> <i> نقدی </i>  <span>01:15:12</span></li>
                                                  <li> <h3> پروژه ایجاد یک وب سایت - طراحی دیتابیس </h3> <i> نقدی </i>  <span>02:05:12</span></li>
                                                  <li> <h3> پروژه ایجاد یک وب سایت - ایجاد پنل مدیریت </h3> <i> نقدی </i>  <span>00:10:12</span></li>
                                                  <li> <h3> چرا شی گرایی یاد بگیریم ؟ </h3> <i> نقدی </i>  <span>01:15:12</span></li>
                                                  <li> <h3> پروژه ایجاد یک وب سایت - طراحی دیتابیس </h3> <i> نقدی </i>  <span>02:05:12</span></li>
                                                  <li> <h3> پروژه ایجاد یک وب سایت - ایجاد پنل مدیریت </h3> <i> نقدی </i>  <span>00:10:12</span></li>
                                             </ul>
                                        </section>

                                        <section className="user-comments">
                                             <header><h3> نظرات کاربران </h3></header>
                                             <div className="inner">
                                                  <form>
                                                       <div className="row">
                                                            <div className="col-md-4 col-sm-12 col-xs-12">
                                                                 <div className="form-group">
                                                                      <input type="text" className="form-control" placeholder="نام و نام خانوادگی" />
                                                                 </div>
                                                                 <div className="form-group">
                                                                      <input type="text" className="form-control" placeholder="ایمیل" />
                                                                 </div>
                                                                 <div className="form-group">
                                                                      <input type="text" className="form-control" placeholder="شماره تماس" />
                                                                 </div>
                                                            </div>
                                                            <div className="col-md-8 col-sm-12 col-xs-12">
                                                                 <div className="form-group">
                                                                      <textarea className="form-control" placeholder="متن نظر"></textarea>
                                                                 </div>
                                                                 <div className="row">
                                                                      <div className="col-md-8 col-sm-7 col-xs-7">
                                                                           <div className="form-group">
                                                                                <input type="text" className="form-control" placeholder="کد امنیتی" />
                                                                           </div>
                                                                      </div>
                                                                      <div className="col-md-4 col-sm-5 col-xs-5">
                                                                           <img src="../images/captcha.jpg" />
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="col-xs-12">
                                                                 <button type="submit" className="btn btn-success"> ثبت دیدگاه </button>
                                                            </div>
                                                       </div>
                                                  </form>

                                                  <div className="comment-list">

                                                       <div className="comment-row">
                                                            <img src="../images/pic/avatar.jpg" />
                                                            <div className="left-col">
                                                                 <h3> میترا رحیمی </h3>
                                                                 <span>12/03/1397</span>
                                                                 <p>
                                                                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                            </p>
                                                            </div>
                                                       </div>


                                                       <div className="comment-row">
                                                            <img src="../images/pic/avatar.jpg" />
                                                            <div className="left-col">
                                                                 <h3> میترا رحیمی </h3>
                                                                 <span>12/03/1397</span>
                                                                 <p>
                                                                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                            </p>
                                                            </div>
                                                       </div>


                                                       <div className="comment-row">
                                                            <img src="../images/pic/avatar.jpg" />
                                                            <div className="left-col">
                                                                 <h3> میترا رحیمی </h3>
                                                                 <span>12/03/1397</span>
                                                                 <p>
                                                                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                            </p>
                                                            </div>
                                                       </div>


                                                       <div className="comment-row">
                                                            <img src="../images/pic/avatar.jpg" />
                                                            <div className="left-col">
                                                                 <h3> میترا رحیمی </h3>
                                                                 <span>12/03/1397</span>
                                                                 <p>
                                                                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                            </p>
                                                            </div>
                                                       </div>


                                                       <div className="comment-row">
                                                            <img src="../images/pic/avatar.jpg" />
                                                            <div className="left-col">
                                                                 <h3> میترا رحیمی </h3>
                                                                 <span>12/03/1397</span>
                                                                 <p>
                                                                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                            </p>
                                                            </div>
                                                       </div>


                                                       <nav aria-label="Page navigation">
                                                            <ul className="pagination justify-content-center">
                                                                 <li className="page-item">
                                                                      <a className="page-link" href="#" aria-label="Previous">
                                                                           <span aria-hidden="true"><i className="zmdi zmdi-chevron-right"></i></span>
                                                                      </a>
                                                                 </li>
                                                                 <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                                 <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                                 <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                                 <li className="page-item">
                                                                      <a className="page-link" href="#" aria-label="Next">
                                                                           <span aria-hidden="true"><i className="zmdi zmdi-chevron-left"></i></span>
                                                                      </a>
                                                                 </li>
                                                            </ul>
                                                       </nav>

                                                  </div>
                                             </div>
                                        </section>
                                   </div>

                                   <aside className="col-md-4 col-sm-12 col-xs-12 pull-right">
                                        <div className="statistics">
                                             <ul>
                                                  <li>
                                                       <span> مدت دوره </span>
                                                       <i> 03:12:52 </i>
                                                  </li>
                                                  <li>
                                                       <span> تعداد ویدیوها </span>
                                                       <i> 16 </i>
                                                  </li>
                                                  <li>
                                                       <span> تعداد دانشجوها </span>
                                                       <i> 52 نفر </i>
                                                  </li>
                                             </ul>

                                             <a href=""> شرکت در دوره : {singleCourse.price == 0 ? "رایگان" : `${singleCourse.price} تومان`} </a>
                                        </div>

                                        <article className="teacher-info">
                                             <img src="../images/pic/avatar.jpg" />
                                             <h2> مدرس : ایمان مدائنی </h2>
                                             <p>
                                                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است استفاده از طراحان گرافیک است ...
                            </p>
                                        </article>

                                        <article className="term-info">
                                             <h2> اطلاعات این دوره </h2>
                                             <ul>
                                                  <li>سطح دوره: پیشرفته</li>
                                                  <li>وضعیت دوره: در حال برگزاری</li>
                                                  <li>قیمت :{singleCourse.price == 0 ? "رایگان" : `${singleCourse.price} تومان`} </li>
                                                  <li>تاریخ ثبت این دوره : چهار شنبه ۲۱ شهریور ۱۳۹۷</li>
                                                  <li>آخرین بروزرسانی دوره : چهار شنبه ۲۱ شهریور ۱۳۹۷</li>
                                             </ul>
                                        </article>

                                        <div className="share-layer">
                                             <span> به اشتراک گذاری </span>
                                             <a href=""><i className="zmdi zmdi-facebook"></i></a>
                                             <a href=""><i className="zmdi zmdi-google-old"></i></a>
                                             <a href=""><i className="zmdi zmdi-twitter"></i></a>
                                             <a href=""><i className="zmdi zmdi-linkedin"></i></a>
                                        </div>

                                        <div className="tags-layer">
                                             <a href=""> ربات تلگرام </a>
                                             <a href=""> ساخت ربات </a>
                                             <a href=""> برنامه نویسی ربات </a>
                                             <a href=""> کدنویسی ربات </a>
                                             <a href=""> ربات تلگرام </a>
                                             <a href=""> ساخت ربات </a>
                                             <a href=""> برنامه نویسی ربات </a>
                                             <a href=""> کدنویسی ربات </a>
                                        </div>

                                   </aside>
                              </div>
                         </section>
                    </div>


               </Fragment>
          );
     }
}

export default SingleCoursePage;