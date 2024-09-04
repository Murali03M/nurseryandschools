import React from 'react'

import Topbar from './components/topbar'
import Navbar from './components/navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './components/main'

const App: React.FC = () => {
 
  return (
    <Router>
      <Topbar  />
      <Navbar/>
      <Main />
    </Router>
  );
};

export default App;
