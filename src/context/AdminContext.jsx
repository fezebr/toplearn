import React, { useContext, useState } from 'react';
import { adminContext, CoursesContext } from './context';
import NewCourseDialog from './../components/admin/dialog/NewCourseDialog';
import DeleteCourseDialog from './../components/admin/dialog/DeleteCourseDialog';
import EditeCourseDialog from './../components/admin/dialog/EditeCourseDialog';
const AdminContext = ({ children }) => {
     const context = useContext(CoursesContext)
     const { course } = context

     const [currentPost, setCurrentPost] = useState({})

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

     return (
          <adminContext.Provider
               value={{
                    course,
                    openNewCourseDialog,
                    closeNewCourseDialog,
                    openDeleteCourseDialog,
                    closeDeleteCourseDialog,
                    openEditeCourseDialog
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