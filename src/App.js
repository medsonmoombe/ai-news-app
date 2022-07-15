import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NewsList from './components/NewsList';
import PageNotFound from './components/PageNotFound';

function App() {;

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<NewsList/>} />
                <Route path="/my-profile" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default App;