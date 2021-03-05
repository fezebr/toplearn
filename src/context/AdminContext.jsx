import React, { useContext,useState } from 'react';
import { adminContext, CoursesContext } from './context';
import NewCourseDialog from './../components/admin/dialog/NewCourseDialog';
const AdminContext = ({ children }) => {
     const context = useContext(CoursesContext)
     const { course } = context

     const [newCoursesDialog, setNewCoursesDialog] = useState(false)
     const openNewCourseDialog = () => setNewCoursesDialog(true)
     const closeNewCourseDialog = () => setNewCoursesDialog(false)
     return (
          <adminContext.Provider
               value={{
                    course,
                    openNewCourseDialog,
                    closeNewCourseDialog
               }}
          >
               <NewCourseDialog
                    showDialog={newCoursesDialog}
                    closeDialog={closeNewCourseDialog}
               />
               { children}
          </adminContext.Provider>
     );
}

export default AdminContext;