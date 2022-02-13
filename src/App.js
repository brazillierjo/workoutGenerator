import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './views/Home'
import Lists from './views/Lists'
import NotFound from './views/NotFound'

function App() {
  return (
    <Router>
      <Navbar />
      <Fragment>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/list' element={<Lists />} />
          <Route exact path='/error' element={<NotFound />} />
        </Routes>
      </Fragment>
      <Footer />
    </Router>
  );
}

export default App;
