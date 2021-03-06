import React, { useContext, useState } from 'react';
import { adminContext, CoursesContext } from './context';
import NewCourseDialog from './../components/admin/dialog/NewCourseDialog';
import DeleteCourseDialog from './../components/admin/dialog/DeleteCourseDialog';
const AdminContext = ({ children }) => {
     const context = useContext(CoursesContext)
     const { course } = context

     const [currentPost, setCurrentPost] = useState({})

     const [newCourseDialog, setNewCourseDialog] = useState(false)
     const [deleteCourseDialog, setDeleteCourseDialog] = useState(false)

     const openNewCourseDialog = () => setNewCourseDialog(true)
     const closeNewCourseDialog = () => setNewCourseDialog(false)

     const openDeleteCourseDialog = (course) => {
          setDeleteCourseDialog(true)
          setCurrentPost(course)
          console.log(currentPost)
     }
     const closeDeleteCourseDialog = () => setDeleteCourseDialog(false)
     return (
          <adminContext.Provider
               value={{
                    course,
                    openNewCourseDialog,
                    closeNewCourseDialog,
                    openDeleteCourseDialog,
                    closeDeleteCourseDialog
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
               />
               { children}
          </adminContext.Provider>
     );
}

export default AdminContext;