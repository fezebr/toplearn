import React, { useContext, useState, useEffect } from 'react';
import { adminContext, CoursesContext } from './context';
import NewCourseDialog from './../components/admin/dialog/NewCourseDialog';
import DeleteCourseDialog from './../components/admin/dialog/DeleteCourseDialog';
import EditeCourseDialog from './../components/admin/dialog/EditeCourseDialog';
import { successMessage } from './../components/utils/Message';
import { deleteCourse } from '../components/Services/coursesService';
const AdminContext = ({ children }) => {
     const context = useContext(CoursesContext)
     const { courses, setCourses } = context

     const [currentPost, setCurrentPost] = useState({})
     const [courseList, setCourseList] = useState([])
     const [search, setSearch] = useState([])
     const [newCourseDialog, setNewCourseDialog] = useState(false)
     const [deleteCourseDialog, setDeleteCourseDialog] = useState(false)
     const [editeCourseDialog, setEditeCourseDialog] = useState(false)


     const openNewCourseDialog = () => setNewCourseDialog(true)
     const closeNewCourseDialog = () => setNewCourseDialog(false)

     const openDeleteCourseDialog = (course) => {
          setDeleteCourseDialog(true)
          setCurrentPost(course)
          console.log(currentPost)
     }
     const closeDeleteCourseDialog = () => setDeleteCourseDialog(false)

     const openEditeCourseDialog = (course) => {
          setEditeCourseDialog(true)
          setCurrentPost(course)
          console.log(currentPost)
     }
     const closeEditeCourseDialog = () => setEditeCourseDialog(false)

     useEffect(() => setCourseList(courses), [courses])
     const filteredCourses = courseList.filter(i => i.title.includes(search))

     console.log(courses)
     console.log(filteredCourses)
     console.log(search)

     /////////////////////////////*delete course*///////////////////////////////////////////
     const handleCourseDelete = async (courseId) => {
          try {
               const { status } = await deleteCourse(courseId);
               const filterDeletCourse = courses.filter(i => i._id !== courseId)
               setCourses(filterDeletCourse)
               if (status === 200) successMessage("دوره با موفقیت پاک شد.");
          } catch (ex) {
               console.log(ex)
          }
     }


     return (
          <adminContext.Provider
               value={{
                    courses,
                    openNewCourseDialog,
                    closeNewCourseDialog,
                    openDeleteCourseDialog,
                    closeDeleteCourseDialog,
                    openEditeCourseDialog,
                    setSearch,
                    filteredCourses
               }}
          >
               <NewCourseDialog
                    showDialog={newCourseDialog}
                    closeDialog={closeNewCourseDialog}
               />

               <DeleteCourseDialog
                    showDialog={deleteCourseDialog}
                    closeDialog={closeDeleteCourseDialog}
                    course={currentPost}
                    handleCourseDelete={handleCourseDelete}
               />

               <EditeCourseDialog
                    showDialog={editeCourseDialog}
                    closeDialog={closeEditeCourseDialog}
                    course={currentPost}
               />
               { children}
          </adminContext.Provider>
     );
}

export default AdminContext;