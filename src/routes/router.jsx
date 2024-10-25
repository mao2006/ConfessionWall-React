import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import App from '../App';
import { LoginPage, RegisterPage } from '../pages/login&register';
import { useSelector } from 'react-redux';
import { AllComfession, MyConfession, AboutMe, MainPage } from '../pages/mainpage';
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
                    <Route path='register' element={!isLogin? <RegisterPage/> : <Navigate to={"/main"} />} />
                    <Route path='main' element={isLogin? <MainPage/> : <Navigate to={"/login"} />}>
                        <Route path='all' element={<AllComfession/>}></Route>
                        <Route path='mine' element={<MyConfession/>}></Route>
                        <Route path='me' element={<AboutMe/>}></Route>
                    </Route>
                    <Route path="*" element={<h1 className='absolute text-red-800 text-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>404 Not Found</h1>} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter