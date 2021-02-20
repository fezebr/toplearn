import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TopLearn from './TopLearn';
import CoursesContextProvider from './CoursesContextProvider';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <BrowserRouter>
            <CoursesContextProvider />
            <ToastContainer/>
        </BrowserRouter>
    );
}

export default App;
