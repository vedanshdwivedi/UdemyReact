import './App.css'
import LoginPage from './pages/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

