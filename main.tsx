import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Feed from './pages/Feed';
import CreateListing from './pages/CreateListing';
import Listing from './pages/Listing';
import './styles.css';

function App(){
  return (
    <BrowserRouter>
      <header className="site-header">
        <h1><Link to="/">FinderX</Link></h1>
        <nav><Link to="/feed">Feed</Link> • <Link to="/create">Create</Link></nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Feed/>} />
          <Route path="/feed" element={<Feed/>} />
          <Route path="/create" element={<CreateListing/>} />
          <Route path="/listing/:id" element={<Listing/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
