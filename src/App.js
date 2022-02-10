import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home'
import Lists from './views/Lists'
import About from './views/About'
import NotFound from './views/NotFound'

function App() {
  return (
    <Router>
      <Navbar />
      <Fragment>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/list' element={<Lists />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='/error' element={<NotFound />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
