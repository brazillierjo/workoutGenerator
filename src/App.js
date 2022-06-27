import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home'
import Lists from './views/Lists'
import Infos from './views/Infos'
import NotFound from './views/NotFound'

function App() {
  return (
    <div className='bg-slate-900'>
    <Router>
      <Navbar />
      <Fragment>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/list' element={<Lists />} />
          <Route exact path='/infos' element={<Infos />} />
          <Route exact path='/error' element={<NotFound />} />
        </Routes>
      </Fragment>
      </Router>
    </div>
  );
}

export default App;
