import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import UerContext from './../context/UserContext';

function App() {
    return (
        <BrowserRouter>
            <UerContext />
            <ToastContainer />
        </BrowserRouter>
    );
}

export default App;
