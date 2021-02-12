import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TopLearn from './TopLearn';
import CoursesContextProvider from './CoursesContextProvider';

function App() {
    return (
        <BrowserRouter>
        
            <CoursesContextProvider />
        </BrowserRouter>
    );
}

export default App;
