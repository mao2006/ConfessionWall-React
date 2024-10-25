import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import App from '../App';
import LoginPage from '../pages/login&register/loginpage';

const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<App/>} >
                    <Route index element={<Navigate to={'login'} />}></Route>
                    <Route path='login' element={<LoginPage/>} />
                    <Route path="*" element={<h1 className='absolute text-red-800 text-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>404 Not Found</h1>} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter