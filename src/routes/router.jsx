import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App';

const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<App/>} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </Router>
    )
}

export default AppRouter