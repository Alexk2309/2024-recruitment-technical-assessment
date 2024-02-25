import React from 'react';
import SideBar from './components/SideBar';


import './App.css';
import FrontPage from './components/FrontPage';

function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <FrontPage></FrontPage>
    </div>
  );
}

export default App;
