import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/InputPage/InputPage';
import ResultsPage from './pages/ResultsPage/ResultsPage';
import InputPage from './pages/InputPage/InputPage';

function App(): JSX.Element {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/input' element={<InputPage />} />
                    <Route path='/results' element={<ResultsPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
