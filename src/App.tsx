import React, { useState } from 'react'

import Topbar from './components/topbar'
import Navbar from './components/navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './components/main'

const App: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.classList.toggle('dark', !isDarkTheme);
  };

  return (
    <Router>
      <Topbar isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <Navbar theme={isDarkTheme ? 'dark' : 'light'} />
      <Main />
    </Router>
  );
};

export default App;
