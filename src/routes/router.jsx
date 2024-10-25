import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import App from '../App';
import LoginPage from '../pages/login&register/loginpage';
import { useSelector } from 'react-redux';
import MainPage from '../pages/mainpage/mainpage';
// import { useEffect } from 'react';
// import { update } from '../stores/stores/tokenstore';

const AppRouter = () => {
    const token = useSelector(state => state.token.token)
    const isLogin = (token.payload === '') ? false : true
    // const dispatch = useDispatch()
    // dispatch(update({payload: ''}))
    // useEffect(() => {
    //     dispatch(update({payload: ''}))
    // })
    return(
        <Router>
            <Routes>
                <Route path='/' element={<App/>} >
                    <Route index element={<Navigate to={'login'} />}></Route>
                    {/* <Route path='login' element={<LoginPage/>} /> */}
                    <Route path='login' element={!isLogin? <LoginPage/> : <Navigate to={"/main"} />} />
                    <Route path='main' element={isLogin? <MainPage/> : <Navigate to={"/login"} />} />
                    <Route path="*" element={<h1 className='absolute text-red-800 text-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>404 Not Found</h1>} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter