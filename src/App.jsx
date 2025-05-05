import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InputPage from './components/InputPage';
import DisplayPage from './components/DisplayPage'

const App = () => (
    <Router>
        <Routes>
            <Route path='/' element={<InputPage />} />
            <Route path='/display' element={<DisplayPage />} />
        </Routes>
    </Router>
    );

export default App;
